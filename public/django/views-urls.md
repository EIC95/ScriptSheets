# Views and URLs

## Setting Up Views

In Django, views are Python functions that handle user requests and return a response. They can render HTML templates, return JSON, or redirect users to another page.

### Basic View

```python
# views.py
from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Home Page!")
```

### View with Template Rendering

```python
# views.py
from django.shortcuts import render

def about(request):
    return render(request, "about.html")  # Renders the 'about.html' template
```

### View with Context

```python
# views.py
from django.shortcuts import render

def product_list(request):
    products = Product.objects.all()  # Query for all products
    context = {"products": products}
    return render(request, "product_list.html", context)
```

### View Returning JSON Response

You can send JSON responses using `JsonResponse` or `HttpResponse` with content type `application/json`.

```python
# views.py
from django.http import JsonResponse

def product_list_json(request):
    products = Product.objects.values("name", "price")  # Query products
    return JsonResponse(list(products), safe=False)  # Return products as JSON
```

### Checking Request Method

To handle different HTTP methods like `GET`, `POST`, etc., use `request.method`.

```python
# views.py
from django.http import HttpResponse

def handle_request(request):
    if request.method == 'GET':
        return HttpResponse("This is a GET request!")
    elif request.method == 'POST':
        return HttpResponse("This is a POST request!")
    else:
        return HttpResponse("Unsupported request method.")
```

⚠️ **Common Pitfalls:**  
- Forgetting to set `safe=False` when returning lists with `JsonResponse` (needed for non-dict data structures).
- Handling `request.method` incorrectly in function-based views (always check the method to prevent errors).

## Setting Up URLs

To link views to URLs, you need to define URL patterns in `urls.py`.

### Basic URL Configuration

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),  # Home page view
    path("about/", views.about, name="about"),  # About page view
]
```

### Dynamic URL Parameters

Django allows dynamic URL parameters, which can be captured and passed to views.

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("product/<int:id>/", views.product_detail, name="product_detail"),
]
```

In the above example, `<int:id>` captures an integer `id` from the URL and passes it to the `product_detail` view.

### View for Dynamic URL

```python
# views.py
from django.shortcuts import render, get_object_or_404
from .models import Product

def product_detail(request, id):
    product = get_object_or_404(Product, pk=id)  # Fetch the product by its ID
    return render(request, "product_detail.html", {"product": product})
```

## Including Other URL Configurations

If your app has multiple URL patterns, it's a good practice to include them in the main `urls.py` file.

```python
# project's urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("myapp.urls")),  # Include app-specific URLs
]
```

## Class-Based Views (Optional)

Django supports Class-Based Views (CBVs) for more complex views, providing built-in generic views like `ListView` or `DetailView`.

### Basic Class-Based View

```python
# views.py
from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = "home.html"
```

### URL Configuration for Class-Based Views

```python
# urls.py
from django.urls import path
from .views import HomePageView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),  # Class-based view
]
```

## Making HTTP Requests in Django

Django does not make outgoing HTTP requests directly, but you can use external libraries like `requests` to interact with other APIs.

### Installing `requests`

Before using `requests`, you need to install it:

```sh
pip install requests
```

### Example of HTTP GET Request

```python
# views.py
import requests
from django.http import JsonResponse

def external_api_request(request):
    response = requests.get('https://api.example.com/data')  # Make GET request to external API
    if response.status_code == 200:
        data = response.json()  # Assuming the response is JSON
        return JsonResponse(data)  # Return the data as JSON to the client
    else:
        return JsonResponse({"error": "Failed to retrieve data"}, status=500)
```

### Example of HTTP POST Request

```python
# views.py
import requests
from django.http import JsonResponse

def send_data(request):
    payload = {"key": "value"}  # Data to send to the external API
    response = requests.post('https://api.example.com/submit', data=payload)
    if response.status_code == 201:
        return JsonResponse({"message": "Data successfully sent!"})
    else:
        return JsonResponse({"error": "Failed to send data"}, status=500)
```

### Handling Different HTTP Methods

You can also send requests with other HTTP methods like `PUT`, `DELETE`, etc.

```python
# views.py
import requests
from django.http import JsonResponse

def update_data(request):
    if request.method == "PUT":
        payload = {"key": "updated_value"}
        response = requests.put('https://api.example.com/update', data=payload)
        if response.status_code == 200:
            return JsonResponse({"message": "Data successfully updated!"})
        else:
            return JsonResponse({"error": "Failed to update data"}, status=500)
```

### Handling HTTP Request Errors

It’s important to handle errors that may occur when sending an HTTP request. Here’s how to manage possible errors with `try` and `except`:

```python
# views.py
import requests
from django.http import JsonResponse

def external_api_request(request):
    try:
        response = requests.get('https://api.example.com/data')
        response.raise_for_status()  # Raise an exception for 4xx/5xx HTTP errors
        data = response.json()  # If no error, parse the response
        return JsonResponse(data)
    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": str(e)}, status=500)
```

## Common Pitfalls

- **Blocking Calls:** Requêter des API externes peut ralentir ton application, surtout si l'API met du temps à répondre. Pour éviter cela, tu peux envisager d'utiliser des tâches asynchrones ou une queue de travail comme Celery.
- **Timeout:** Toujours définir un délai d'attente (`timeout`) pour tes requêtes pour éviter que ton application ne reste bloquée en cas d'API non réactive.

```python
response = requests.get('https://api.example.com/data', timeout=5)  # Timeout after 5 seconds
```

- Forgetting to check `request.method` in function-based views when handling different types of requests.
- Not using `get_object_or_404()` when fetching objects by ID, leading to errors if the object doesn't exist.


## Best Practices

- Use function-based views for simple logic and CBVs for more complex views with shared behaviors.
- Follow RESTful conventions for URLs (e.g., use `/products/` for lists and `/products/<id>/` for individual resources).
- Use `name` attributes in `path()` to easily reference URLs in templates and views.