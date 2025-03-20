# Security in Django

## Cross-Site Request Forgery (CSRF) Protection

### Enabling CSRF Protection (Default)

Django automatically includes CSRF protection. Ensure it's enabled in `MIDDLEWARE`:

```python
# settings.py
MIDDLEWARE = [
    'django.middleware.csrf.CsrfViewMiddleware',
]
```

### Using CSRF Token in Forms

```html
<form method="post">
    {% csrf_token %}
    <input type="text" name="data">
    <button type="submit">Submit</button>
</form>
```

### Exempting a View (Use with Caution)

```python
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def my_view(request):
    return HttpResponse("CSRF Exempted")
```

## SQL Injection Protection

Django’s ORM prevents SQL injection by using parameterized queries:

✅ **Safe Query (Using ORM)**  
```python
User.objects.filter(username="admin")
```

❌ **Unsafe Query (Raw SQL - Avoid)**  
```python
cursor.execute("SELECT * FROM users WHERE username = '" + user_input + "'")
```

## Cross-Site Scripting (XSS) Protection

Django escapes HTML by default in templates:

✅ **Safe**  
```html
{{ user_input }}  <!-- Automatically escapes dangerous HTML -->
```

❌ **Unsafe (Allows XSS - Avoid)**  
```html
{{ user_input | safe }}
```

Use `bleach` library for sanitization if needed:

```sh
pip install bleach
```

```python
import bleach
clean_data = bleach.clean(user_input)
```

## Clickjacking Protection

Django includes clickjacking protection via middleware:

```python
# settings.py
MIDDLEWARE = [
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
```

To allow embedding only on specific sites:

```python
# settings.py
X_FRAME_OPTIONS = 'ALLOW-FROM https://trusteddomain.com'
```

## Secure Password Storage

Django hashes passwords using a strong algorithm:

```python
from django.contrib.auth.hashers import make_password

hashed_password = make_password("mypassword")
```

Ensure password hashing settings are strong:

```python
# settings.py
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.Argon2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher',
    'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
]
```

## HTTPS and Secure Cookies

Force Django to use HTTPS:

```python
# settings.py
SECURE_SSL_REDIRECT = True
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
```

Set HTTP Strict Transport Security (HSTS):

```python
# settings.py
SECURE_HSTS_SECONDS = 31536000  # 1 year
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True
```

## Restricting User Permissions

### Limiting Access to Views

```python
from django.contrib.auth.decorators import login_required, permission_required
from django.http import HttpResponse

@login_required
def protected_view(request):
    return HttpResponse("You are logged in!")

@permission_required('app.view_product', raise_exception=True)
def restricted_view(request):
    return HttpResponse("You have permission!")
```

### Using Django Groups

```python
from django.contrib.auth.models import Group, User

group = Group.objects.create(name="Editors")
user = User.objects.get(username="john")
user.groups.add(group)
```

## Security Headers

Set security headers using middleware:

```python
# settings.py
SECURE_BROWSER_XSS_FILTER = True
X_CONTENT_TYPE_OPTIONS = "nosniff"
```

## Common Pitfalls:
- Allowing users to submit unsanitized HTML.
- Disabling CSRF protection unnecessarily.

## Best Practices:
- Always use Django's built-in authentication and authorization.
- Use HTTPS everywhere and secure cookies.