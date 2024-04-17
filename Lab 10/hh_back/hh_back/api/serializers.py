from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        instance = Company(name=validated_data.get('name'))
        instance.save()
        return instance

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.save()
        return instance


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': True},
            'name': {'required': True},
            'description':{'read_only': True},
            'address': {'read_only': True},
            'city': {'read_only': True}
        }


class VacancySerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': True},
            'description': {'read_only': True},

        }
