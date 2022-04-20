from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from .serializers import *
from .views_helper import *

# from dj_rest_auth.registration.views import SocialLoginView
# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from allauth.socialaccount.providers.oauth2.client import OAuth2Client

# class GoogleAuth(SocialLoginView):
#     adapter_class = GoogleOAuth2Adapter
#     client_class = OAuth2Client

def homepage(request):
    Index = open("build/index.html").read()
    return HttpResponse(Index)
def log_in(request):
    pass
def sign_up(request):
    pass
def log_out(request):
    pass
def who_am_i(request):
    pass


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


