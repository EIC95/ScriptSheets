# Models & Database

## Defining Models

```python
from django.db import models

# Define a simple model
class Product(models.Model):
    name = models.CharField(max_length=100)  # String field with max length
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Decimal field
    stock = models.IntegerField()  # Integer field
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp (auto set)

    def __str__(self):
        return self.name  # String representation
```

## Field Types

| Field Type         | Description |
|--------------------|------------|
| `CharField`       | String with max length |
| `TextField`       | Large text (no max length) |
| `IntegerField`    | Integer values |
| `FloatField`      | Floating-point values |
| `DecimalField`    | Decimal values with precision |
| `BooleanField`    | True/False values |
| `DateTimeField`   | Date & time values |
| `ForeignKey`      | One-to-Many relationship |
| `ManyToManyField` | Many-to-Many relationship |
| `OneToOneField`   | One-to-One relationship |

## Relationships

### One-to-Many (`ForeignKey`)

```python
class Category(models.Model):
    name = models.CharField(max_length=50)

class Product(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)  # One-to-Many
```

### Many-to-Many (`ManyToManyField`)

```python
class Product(models.Model):
    name = models.CharField(max_length=100)
    tags = models.ManyToManyField("Tag")  # Many-to-Many relationship

class Tag(models.Model):
    name = models.CharField(max_length=30)
```

### One-to-One (`OneToOneField`)

```python
class UserProfile(models.Model):
    user = models.OneToOneField("auth.User", on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to="avatars/", blank=True, null=True)
```

## `on_delete` Options

| Option              | Behavior when referenced object is deleted |
|---------------------|-------------------------------------------|
| `CASCADE`          | Delete related objects as well |
| `SET_NULL`         | Set field to `NULL` (requires `null=True`) |
| `SET_DEFAULT`      | Set field to a default value (requires `default=...`) |
| `DO_NOTHING`       | Prevent deletion (may cause integrity errors) |
| `PROTECT`          | Prevent deletion (raises `ProtectedError`) |

```python
class Order(models.Model):
    user = models.ForeignKey("auth.User", on_delete=models.PROTECT)  # Prevent deletion
```

## Migrations

```sh
# Create migration files for model changes
python manage.py makemigrations

# Apply migrations to the database
python manage.py migrate

# Show current migration status
python manage.py showmigrations
```

## Database Configuration

### Default SQLite (in `settings.py`)

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}
```

### Using PostgreSQL

```sh
# Install PostgreSQL driver
pip install psycopg2
```

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "mydatabase",
        "USER": "myuser",
        "PASSWORD": "mypassword",
        "HOST": "localhost",
        "PORT": "5432",
    }
}
```

### Using MySQL

```sh
# Install MySQL driver
pip install mysqlclient
```

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.mysql",
        "NAME": "mydatabase",
        "USER": "myuser",
        "PASSWORD": "mypassword",
        "HOST": "localhost",
        "PORT": "3306",
    }
}
```

⚠️ **Note:** Always install the required database driver (`psycopg2` for PostgreSQL, `mysqlclient` for MySQL).  

## Querying the Database

```python
# Create an instance
product = Product.objects.create(name="Laptop", price=1200.99, stock=10)

# Retrieve all objects
products = Product.objects.all()

# Filter objects
laptops = Product.objects.filter(name="Laptop")
expensive_products = Product.objects.filter(price__gt=1000)

# Get a single object
single_product = Product.objects.get(id=1)

# Exclude objects
cheap_products = Product.objects.exclude(price__gt=1000)

# Order results
ordered_products = Product.objects.order_by("price")  # Ascending
reverse_order = Product.objects.order_by("-price")  # Descending

# Limit results
limited_products = Product.objects.all()[:5]  # First 5 products

# Update an object
single_product.price = 1100.99
single_product.save()

# Bulk update
Product.objects.filter(price__lt=500).update(stock=0)

# Delete an object
single_product.delete()

# Bulk delete
Product.objects.filter(stock=0).delete()

# Counting objects
count = Product.objects.count()

# Aggregation (sum, average, max, min)
from django.db.models import Sum, Avg, Max, Min

total_stock = Product.objects.aggregate(Sum("stock"))
average_price = Product.objects.aggregate(Avg("price"))

# Using transactions
from django.db import transaction

with transaction.atomic():
    product1 = Product.objects.create(name="Tablet", price=600, stock=5)
    product2 = Product.objects.create(name="Phone", price=800, stock=8)
```

⚠️ **Common Pitfalls:**  
- Using `get()` without handling `DoesNotExist` exceptions.  
- Forgetting to run `makemigrations` and `migrate` after modifying models.  
- Not indexing frequently queried fields, causing performance issues.

💡 **Best Practices:**  
- Always wrap multiple database operations in transactions when needed.  
- Use `.select_related()` for ForeignKey fields to optimize queries.  
- Use `.prefetch_related()` for ManyToMany fields to reduce database hits.  
- Index large tables with `db_index=True` on frequently searched fields.