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

    def __str__(self):
        return self.portfolio_name

# class CryptoCoin(models.Model):
#     name_id = models.CharField(max_length=255)
#     # coins = models.ManyToManyField(Portfolio, related_name='coins')
#     def __str__(self):
#         return self.name

class CryptoHoldings(models.Model):
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE, related_name='holdings')
    # quantity = models.IntegerField() ADD IF HAVE TIME
    coin_id = models.CharField(max_length=255)


