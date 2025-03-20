# Introduction

## Installation

```sh
# Install Django using pip
pip install django
```

## Creating a Virtual Environment

```sh
# Create a virtual environment
python -m venv venv

# Activate the virtual environment (Windows)
venv\Scripts\activate

# Activate the virtual environment (macOS/Linux)
source venv/bin/activate

# Install Django inside the virtual environment
pip install django
```

## Project Structure

```sh
# Create a new Django project
django-admin startproject myproject

# Navigate into the project
cd myproject
```

Project structure:
```
myproject/
│-- manage.py       # Django management script
│-- myproject/      # Project settings module
│   │-- __init__.py
│   │-- settings.py # Project configurations
│   │-- urls.py     # URL routing
│   │-- asgi.py
│   │-- wsgi.py
```

## Creating an App

Django projects are composed of one or more apps. An app is a module that handles a specific piece of functionality (e.g., a blog, an authentication system, etc.).

```sh
# Create a new app within the project
python manage.py startapp myapp
```

Project structure after creating an app:
```
myproject/
│-- manage.py
│-- myproject/
│-- myapp/           # Newly created app
│   │-- __init__.py
│   │-- admin.py     # Admin configurations
│   │-- apps.py      # App configuration
│   │-- models.py    # Database models
│   │-- views.py     # Views for the app
│   │-- tests.py     # Unit tests
│   │-- migrations/  # Database migrations
```

### Registering the App

To make the app part of the project, it must be added to the `INSTALLED_APPS` list in the `settings.py` file.

```python
# settings.py
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myapp',  # Add your app here
]
```

## Running a Django Server

```sh
# Run the development server
python manage.py runserver
```

Access at: `http://127.0.0.1:8000/`

⚠️ **Common Pitfall:**  
- Ensure `ALLOWED_HOSTS` in `settings.py` is set correctly to avoid server errors.
```python
ALLOWED_HOSTS = ["127.0.0.1", "localhost"]
```

💡 **Best Practice:**  
- Always use a virtual environment to manage dependencies and avoid conflicts.