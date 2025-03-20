# Middleware

## Creating Custom Middleware

```python
# myapp/middleware.py
from django.utils.timezone import now

class RequestTimeMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        request.start_time = now()
        response = self.get_response(request)
        return response
```

## Activating Middleware

```python
# settings.py
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.authentication.AuthenticationMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'myapp.middleware.RequestTimeMiddleware',  # Custom middleware
]
```

## Modifying Responses

```python
class ModifyResponseMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response["X-Custom-Header"] = "Custom Value"
        return response
```

## Restricting Middleware to Specific URLs

```python
class RestrictPathMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.path.startswith("/admin/"):
            return self.get_response(request)
        return self.get_response(request)
```

## Common Pitfalls:
- Forgetting to add the middleware to `MIDDLEWARE` in `settings.py`.
- Modifying the response incorrectly, leading to errors.

## Best Practice:
- Keep middleware lightweight to avoid slowing down requests.