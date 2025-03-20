# Templates

## Template Setup

Create a `templates` directory within the app folder.

Project structure:
```
myproject/
│-- myapp/
│   │-- templates/
│   │   │-- myapp/
│   │   │   │-- home.html
```

### Rendering a Template

```python
# views.py
from django.shortcuts import render

def home(request):
    return render(request, "myapp/home.html")
```

### Template Example

```html
<!-- home.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home Page</title>
</head>
<body>
    <h1>Welcome to the Home Page!</h1>
</body>
</html>
```

## Using Context in Templates

Pass data from views to templates.

```python
# views.py
def product_list(request):
    products = Product.objects.all()
    return render(request, "product_list.html", {"products": products})
```

```html
<!-- product_list.html -->
<ul>
    {% for product in products %}
        <li>{{ product.name }} - ${{ product.price }}</li>
    {% endfor %}
</ul>
```

## Template Inheritance

Create a base template to extend for other templates.

```html
<!-- base.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{% block title %}My Site{% endblock %}</title>
</head>
<body>
    <header>
        <nav>...</nav>
    </header>

    <main>
        {% block content %}{% endblock %}
    </main>
</body>
</html>
```

```html
<!-- home.html -->
{% extends "base.html" %}

{% block content %}
    <h1>Home Page Content</h1>
{% endblock %}
```

## Static Files (CSS, JS, Images)

1. Create a `static` directory.
2. Link CSS and JS in templates.

```html
<!-- base.html -->
<head>
    <link rel="stylesheet" href="{% static 'styles.css' %}">
    <script src="{% static 'script.js' %}"></script>
</head>
```

### Directory structure:
```
myproject/
│-- static/
│   │-- styles.css
│   │-- script.js
```

## Control Structures

### If Statements

```html
<!-- product_detail.html -->
{% if product %}
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
{% else %}
    <p>Product not found</p>
{% endif %}
```

### For Loops

```html
<!-- product_list.html -->
<ul>
    {% for product in products %}
        <li>{{ product.name }} - ${{ product.price }}</li>
    {% empty %}
        <li>No products available.</li>
    {% endfor %}
</ul>
```

### Include Template

```html
<!-- header.html -->
<header>
    <nav>...</nav>
</header>

<!-- base.html -->
{% include "header.html" %}
```

## Error Handling (404, 500, etc.)

### Custom 404 Page

Create a custom 404 page by defining a `404.html` template in the `templates` folder.

```html
<!-- 404.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Not Found</title>
</head>
<body>
    <h1>Oops! The page you're looking for doesn't exist.</h1>
    <a href="/">Go to Home Page</a>
</body>
</html>
```

### Custom 500 Page

Create a custom 500 page for internal server errors.

```html
<!-- 500.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Server Error</title>
</head>
<body>
    <h1>Something went wrong. Please try again later.</h1>
    <a href="/">Go to Home Page</a>
</body>
</html>
```

### Handle 404 in Views (Optional)

```python
# views.py
from django.http import Http404

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        raise Http404("Product not found")
    return render(request, "product_detail.html", {"product": product})
```

## Common Pitfalls:
- Forgetting to include `404.html` or `500.html` for custom error pages.
- Using wrong syntax for control structures like `if`, `for`, etc.

## Best Practice:
- Always include custom error pages to enhance user experience.
- Avoid displaying detailed error messages in production (use logging instead).