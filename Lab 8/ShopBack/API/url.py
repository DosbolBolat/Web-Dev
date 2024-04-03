from django.urls import path, re_path
from .views import hello, about, product

urlpatterns = [
    path('hi/', hello),
    path('about/', about),
    path('product/', product)
]
