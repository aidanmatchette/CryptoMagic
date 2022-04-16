from django.db import models
from django.contrib.auth.models import AbstractUser

class AppUser(AbstractUser):
    name = models.CharField(max_length=255)
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Portfolio(models.Model):
    portfolio_name = models.CharField(max_length=65)
    owner = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name='portfolios')

class CryptoCoin(models.Model):
    name = models.CharField(max_length=255)
    name_id = models.CharField(max_length=255)
    quantity = models.IntegerField(max_length=10, default=0)
    coins = models.ManyToManyField(Portfolio, related_name='coins')

    def __str__(self):
        return self.name

