# Django Admin

## Enabling Django Admin

Django provides a built-in admin interface to manage models easily. It must be enabled in `settings.py`:

```python
INSTALLED_APPS = [
    "django.contrib.admin",  # Enables the admin panel
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
]
```

Include the admin URLs in `urls.py`:

```python
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path("admin/", admin.site.urls),
]
```

## Creating a Superuser

```sh
# Create an admin user
python manage.py createsuperuser
```

Enter the username, email, and password when prompted.

## Registering Models in Admin

```python
from django.contrib import admin
from .models import Product, Category

admin.site.register(Product)  # Registers a single model
admin.site.register(Category)
```

## Customizing the Admin Panel

```python
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "stock", "category")  # Columns displayed
    search_fields = ("name",)  # Searchable fields
    list_filter = ("category",)  # Filters in sidebar
    ordering = ("price",)  # Default ordering
    fields = ("name", "price", "stock")  # Fields in the form

admin.site.register(Product, ProductAdmin)
```

## Inline Models

For models with ForeignKey relationships:

```python
class ProductInline(admin.TabularInline):  # Or use admin.StackedInline
    model = Product
    extra = 1  # Number of empty forms

class CategoryAdmin(admin.ModelAdmin):
    inlines = [ProductInline]

admin.site.register(Category, CategoryAdmin)
```

## Custom Actions

```python
@admin.action(description="Set stock to 0")
def reset_stock(modeladmin, request, queryset):
    queryset.update(stock=0)

class ProductAdmin(admin.ModelAdmin):
    actions = [reset_stock]

admin.site.register(Product, ProductAdmin)
```

## Restricting Admin Access

### Restricting Access by Group

```python
# Assign users to groups in the admin panel
# Create a group for "Inventory Managers" in the Django admin
# Give them specific permissions to access only certain models.

# Then restrict access to those models in the admin panel like this:
class ProductAdmin(admin.ModelAdmin):
    def get_queryset(self, request):
        if not request.user.groups.filter(name="Inventory Managers").exists():
            return Product.objects.none()  # Returns no products for non-Inventory Managers
        return super().get_queryset(request)

admin.site.register(Product, ProductAdmin)
```

### Restricting Access by Permission

```python
# Restrict admin access to specific users using permissions
from django.contrib.auth.models import Permission

class ProductAdmin(admin.ModelAdmin):
    def has_change_permission(self, request, obj=None):
        return request.user.has_perm("app.change_product")  # Allow only users with the 'change_product' permission

    def has_delete_permission(self, request, obj=None):
        return request.user.has_perm("app.delete_product")  # Allow only users with the 'delete_product' permission

admin.site.register(Product, ProductAdmin)
```

### Custom Admin Site Permissions

You can restrict access to the whole admin site by overriding the `has_permission` method:

```python
from django.contrib.admin import AdminSite

class CustomAdminSite(AdminSite):
    def has_permission(self, request):
        return request.user.is_staff  # Allow only staff users

admin_site = CustomAdminSite(name="custom_admin")
admin_site.register(Product, ProductAdmin)
```

### Restricting Access to Specific Views

```python
# Restrict access to specific views (e.g., product details)
from django.contrib.admin.views.main import ChangeList

class ProductChangeList(ChangeList):
    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        if not request.user.has_perm("app.view_product"):
            return queryset.none()  # Hide products from users without permission
        return queryset
```

## Restricting Access to Specific Actions

```python
# Restrict actions based on user roles
class ProductAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        return request.user.groups.filter(name="Product Managers").exists()  # Only Product Managers can add

admin.site.register(Product, ProductAdmin)
```

⚠️ **Common Pitfalls:**  
- Forgetting to assign appropriate permissions to users or groups.  
- Not using `get_queryset()` properly to filter model visibility for users.

💡 **Best Practices:**  
- Use Django’s built-in `Group` and `Permission` models to manage access.  
- For granular control, override the `get_queryset()` and permission methods.  
- Use `list_filter` to provide an easy way for users to filter content they have access to.