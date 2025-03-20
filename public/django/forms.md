# Forms

## Creating a Form

```python
# forms.py
from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price']
```

## Rendering a Form in Templates

```python
# views.py
from django.shortcuts import render
from .forms import ProductForm

def add_product(request):
    form = ProductForm()
    return render(request, 'add_product.html', {'form': form})
```

```html
<!-- add_product.html -->
<form method="post">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Add Product</button>
</form>
```

## Handling Form Submission

```python
# views.py
from django.shortcuts import render, redirect
from .forms import ProductForm

def add_product(request):
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('product_list')
    else:
        form = ProductForm()
    return render(request, 'add_product.html', {'form': form})
```

## Validating Form Data

```python
# forms.py
class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ['name', 'description', 'price']
    
    def clean_price(self):
        price = self.cleaned_data.get('price')
        if price <= 0:
            raise forms.ValidationError("Price must be positive")
        return price
```

## Form Widgets

```python
# forms.py
class ProductForm(forms.ModelForm):
    price = forms.DecimalField(widget=forms.NumberInput(attrs={'class': 'price-input'}))
    
    class Meta:
        model = Product
        fields = ['name', 'description', 'price']
```

## Common Pitfalls:
- Forgetting `csrf_token` in form templates, causing CSRF errors.
- Not validating form data properly before saving.

## Best Practice:
- Always use `form.is_valid()` before saving the data to avoid saving invalid data.