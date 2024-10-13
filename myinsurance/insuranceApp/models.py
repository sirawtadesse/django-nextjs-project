# from django.db import models

# class insuranceAppProposal(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     vehicle_make = models.CharField(max_length=100)
#     vehicle_model = models.CharField(max_length=100)
#     vehicle_year = models.CharField(max_length=4)

#     def __str__(self):
#         return self.name

from django.db import models

class insuranceAppProposal(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    vehicle_make = models.CharField(max_length=50)
    vehicle_model = models.CharField(max_length=50)
    vehicle_year = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.name} - {self.vehicle_make} {self.vehicle_model} ({self.vehicle_year})"

from django.db import models

class Claim(models.Model):
    policy_number = models.CharField(max_length=100)
    claim_description = models.TextField()
    claim_amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Claim for {self.policy_number}"

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title