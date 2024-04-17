from django.http import Http404
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Company, Vacancy
from .serializers import CompanySerializer, VacancySerializer, CompanySerializer2


class CompanyListAPIView(generics.ListAPIView, generics.CreateAPIView):
    serializer_class = CompanySerializer

    def get_queryset(self):
        return Company.objects.all()


class CompanyDetailAPIView(generics.DestroyAPIView, generics.UpdateAPIView, generics.RetrieveAPIView):
    lookup_url_kwarg = 'pk'
    serializer_class = CompanySerializer

    def get_object(self):
        try:
            return Vacancy.objects.get(pk=self.kwargs['pk'])
        except Vacancy.DoesNotExist:
            raise Http404


class CompanyVacanciesListAPIView(generics.ListAPIView,generics.DestroyAPIView, generics.UpdateAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)


class VacancyListAPIView(generics.ListAPIView, generics.CreateAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        return Vacancy.objects.all()


class VacancyDetailAPIView(generics.RetrieveAPIView):
    lookup_url_kwarg = 'pk'
    serializer_class = VacancySerializer

    def get_object(self):
        try:
            return Vacancy.objects.get(pk=self.kwargs['pk'])
        except Company.DoesNotExist:
            raise Http404


class TopTenVacanciesListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer
