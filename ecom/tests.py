from django.test import TestCase, Client
from django.urls import reverse
from .models import Product

# Create your tests here.
class EcommerceTestCase(TestCase):
    def setUp(self):
        # Set up any necessary data for your tests
        self.client = Client()
        self.product = Product.objects.create(name="Test Product", price=10.0)
    
    def test_product_detail(self):
        # Test the product detail view
        response = self.client.get(reverse('product_detail', args=[self.product.id]))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.product.name)
        self.assertContains(response, self.product.price)
