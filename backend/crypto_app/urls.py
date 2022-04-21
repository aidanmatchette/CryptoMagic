from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import *

# from dj_rest_auth.registration.views import SocialLoginView
# from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
# from allauth.socialaccount.providers.oauth2.client import OAuth2Client

# class GoogleAuth(SocialLoginView):
#     adapter_class = GoogleOAuth2Adapter
#     client_class = OAuth2Client

router = DefaultRouter()

router.register('portfolio', PortfolioViewSet, basename='portfolio' )
router.register('crypto-coin', CryptoCoinViewSet, basename='crypto-coin' )
router.register('', CryptoCoinViewSet, basename='crypto-coin' )

urlpatterns = [
    path('', homepage, name='homepage'),
    path('signup', sign_up, name='signup'),
    path('login', log_in, name='login'),
    path('logout/', log_out, name='logout'),
    path('whoami', who_am_i , name='whoami'),
    path('', include(router.urls))

    # path('dj-rest-auth/', include('dj_rest_auth.urls')),
    # path('api/v1/rest-auth/google_auth/', GoolgeAuth.as_view(), name='google_login'),

]
