from django.core.exceptions import ObjectDoesNotExist
from django.http.response import HttpResponse, JsonResponse
from datetime import datetime, timedelta

from ShopBack.API.models import Product, Category


def list_products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def getProduct(request, i = None):
    try:
        product = Product.objects.get(id=i)
        product_json = {
            "id": product.id,
            'name': product.name
        }
        return JsonResponse(product_json, safe=False)
    except ObjectDoesNotExist:
        error_json = {
            'ERROR': 'Product does not exist'
        }
        return JsonResponse(error_json,status=404)
    except Exception as e:
        error_json = {
            'ERROR': str(e)
        }
        return JsonResponse(error_json,status=500)

def filterByCategory(request, i =None):
    try:
        category = Category.objects.get(id=i)
        products = Product.objects.get(category=category.name)
        products_json = [p.to_json for p in products]
        return JsonResponse(products_json, safe=False)
    except ObjectDoesNotExist:
        error_json = {
            'ERROR': 'Category does not exist'
        }
        return JsonResponse(error_json,status=404)
    except Exception as e:
        error_json = {
            'ERROR': str(e)
        }
        return JsonResponse(error_json,status=500)

def getCategory(request, i=None):
    try:
        category = Category.objects.get(id=i)
        category_json = {
            "id": category.id,
            'name': category.name
        }
        return JsonResponse(category_json, safe=False)
    except ObjectDoesNotExist:
        error_json = {
            'ERROR': 'Category does not exist'
        }
        return JsonResponse(error_json,status=404)
    except Exception as e:
        error_json = {
            'ERROR': str(e)
        }
        return JsonResponse(error_json, status=500)
