# APIs with Django

## Creating a Basic API with Django

### Installing Django REST Framework (DRF)

```sh
pip install djangorestframework
```

### Adding DRF to Installed Apps

```python
# settings.py
INSTALLED_APPS = [
    'rest_framework',
    'myapp',
]
```

---

## Creating a Serializer

```python
# serializers.py
from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price']
```

---

## Creating API Views

### Function-Based Views

```python
# views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Product
from .serializers import ProductSerializer

@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
```

---

### Class-Based Views

```python
# views.py
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
```

---

## Creating API URLs

```python
# urls.py
from django.urls import path
from .views import product_list, ProductListCreate

urlpatterns = [
    path('products/', product_list, name='product-list'),
    path('products/create/', ProductListCreate.as_view(), name='product-create'),
]
```

---

## Handling Authentication

### Enabling Authentication in DRF

```python
# settings.py
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}
```

### Generating API Tokens

```sh
pip install djangorestframework-authtoken
```

```python
# settings.py
INSTALLED_APPS += ['rest_framework.authtoken']
```

```sh
# Create authentication token for a user
python manage.py drf_create_token <username>
```

---

## Using ViewSets and Routers

```python
# views.py
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
```

```python
# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
```

---

## Common Pitfalls:
- Forgetting to include `'rest_framework'` in `INSTALLED_APPS`.
- Not using `serializer.is_valid()` before saving data.

## Best Practice:
- Use **ViewSets & Routers** for cleaner API structure.
- Enable **authentication & permissions** to secure APIs.