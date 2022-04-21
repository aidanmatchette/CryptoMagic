from django.http import HttpResponse, JsonResponse
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from .models import AppUser
from .serializers import *
from .views_helper import *


def homepage(request):
    Index = open("build/index.html").read()
    return HttpResponse(Index)

@api_view(['POST'])
def log_in(request):
    email = request.data['email']
    password = request.data['password']

    user = authenticate(username=email, password=password)
    print("----------user --------", user)

    if user is not None:
        if user.is_active:
            try:
                print('--------made it ----------')
                login(request._request, user)
                return JsonResponse({'user': user.name, 'message': 'You have successfully logged in'}, status=200)
            except Exception as e:
                print('---- login error -----', e)
                return JsonResponse({'error message':e }, status=299)
        else:
            return JsonResponse({'error message': "Your account is no longer active"}, status=299)
    else:
        return JsonResponse({'error message': 'You do not have an account'}, status=299)


@api_view(['POST'])
def sign_up(request):
    try:
        AppUser.objects.create_user(username=request.data['email'], password=request.data['password'], name=request.data['name'] ,email=request.data['email'])
        return JsonResponse({'message': 'Your account has successfully been created'}, status=200)

    except Exception as e:
        print(str(e))
        return JsonResponse({'error messgage': 'There was an error during your request.'}, status=299)

@api_view(['POST'])
def log_out(request):
   logout(request)
   return JsonResponse({'message': 'You have successfully logged out'})


def who_am_i(request):
    pass


class PortfolioViewSet(ModelViewSet):
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

    # def get_querey set
    # def create

class CryptoCoinViewSet(ModelViewSet):
    queryset = CryptoCoin.objects.all()
    serializer_class = CryptoCoinSerializer


# class AppUserViewSet(ModelViewSet):
#     queryset = AppUser.objects.all()
#     serialzer_class = AppUserSerializer

    # def get_permissions(self):
    #     if self.request.method == 'POST':
    #         return (permissions.AllowAny(),)
    #     return (permissions.IsAdminUser(),)


