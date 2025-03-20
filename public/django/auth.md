# Authentication & Authorization

## User Authentication

### Creating a User

```python
# views.py
from django.contrib.auth.models import User

user = User.objects.create_user(username="john", password="securepassword")
user.save()
```

### User Login

```python
# views.py
from django.contrib.auth import authenticate, login

def user_login(request):
    user = authenticate(username="john", password="securepassword")
    if user is not None:
        login(request, user)
```

### User Logout

```python
# views.py
from django.contrib.auth import logout

def user_logout(request):
    logout(request)
```

---

## Login & Logout Views

### Login Form

```python
# forms.py
from django import forms

class LoginForm(forms.Form):
    username = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput)
```

```python
# views.py
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from .forms import LoginForm

def user_login(request):
    if request.method == "POST":
        form = LoginForm(request.POST)
        if form.is_valid():
            user = authenticate(username=form.cleaned_data["username"], password=form.cleaned_data["password"])
            if user:
                login(request, user)
                return redirect("home")
    else:
        form = LoginForm()
    return render(request, "login.html", {"form": form})
```

```html
<!-- login.html -->
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Login</button>
</form>
```

---

## User Registration

```python
# forms.py
from django.contrib.auth.models import User
from django import forms

class RegisterForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)
    
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
```

```python
# views.py
from django.shortcuts import render, redirect
from .forms import RegisterForm

def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password"])
            user.save()
            return redirect("login")
    else:
        form = RegisterForm()
    return render(request, "register.html", {"form": form})
```

---

## Authorization (Restricting Access)

### Login Required

```python
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    return render(request, "dashboard.html")
```

### Restricting by User Groups

```python
from django.contrib.auth.decorators import permission_required

@permission_required("app.view_product", raise_exception=True)
def view_product(request):
    ...
```

### Restricting Access in Templates

```html
{% if user.is_authenticated %}
    <p>Welcome, {{ user.username }}!</p>
    <a href="{% url 'logout' %}">Logout</a>
{% else %}
    <a href="{% url 'login' %}">Login</a>
{% endif %}
```

---

## Common Pitfalls:
- Forgetting to hash passwords using `set_password()`.
- Not using `csrf_token` in authentication forms.

## Best Practice:
- Use built-in Django authentication views (`LoginView`, `LogoutView`) for cleaner code.
- Always use `login_required` for views that require authentication.