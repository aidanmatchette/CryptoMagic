from django.shortcuts import render
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from .serializers import *

class PortfolioViewSet(ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class CryptoCoinViewSet(ModelViewSet):
    queryset = CryptoCoin.objects.all()
    serializer_class = CryptoCoinSerializer


class AppUserViewSet(ModelViewSet):
    queryset = AppUser.objects.all()
    serialzer_class = AppUserSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return (permissions.AllowAny(),)
        return (permissions.IsAdminUser(),)