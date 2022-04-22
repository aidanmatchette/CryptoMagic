from django.http import HttpResponse, JsonResponse
from rest_framework import permissions
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, logout
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import AppUser
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
import json

def homepage(request):
    Index = open("build/index.html").read()
    return HttpResponse(Index)

@csrf_exempt
def log_in(request):

    data = json.loads(request.body)
    
    email = data['email']
    password = data['password']

    user = authenticate(username=email, password=password)
    print("----------user --------", user)

    if user is not None:
        if user.is_active:
            try:
                login(request, user)
                return JsonResponse({'user': user.name, 'message': 'You have successfully logged in'}, status=200)
            except Exception as e:
                print('---- login error -----', e)
                return JsonResponse({'error message': e }, status=299)
        else:
            return JsonResponse({'error message': "Your account is no longer active"}, status=299)
    else:
        return JsonResponse({'error message': 'You do not have an account'}, status=299)


@csrf_exempt
def sign_up(request):
    try:
        AppUser.objects.create_user(username=request.data['email'], password=request.data['password'], name=request.data['name'] ,email=request.data['email'])
        return JsonResponse({'message': 'Your account has successfully been created'}, status=200)

    except Exception as e:
        print(str(e))
        return JsonResponse({'error messgage': 'There was an error during your request.'}, status=299)

@api_view(['POST'])
# @csrf_exempt
def log_out(request):
    print('------------logout')
    logout(request)
    return JsonResponse({'message': 'You have successfully logged out'})


def who_am_i(request):
    pass


class PortfolioViewSet(ModelViewSet):
    print('--------made it--------')
    # queryset = Portfolio.objects.all()

    serializer_class = PortfolioSerializer
    
    
    def create(self, request, *args, **kwargs):
        print('-------------- create')
        print('request ---------', request)
        return super().create(request, *args, **kwargs)

    def get_queryset(self):
        print('-----------get query set')
        return Portfolio.objects.filter(owner=self.request.user.id)

        
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)     


    # def get_querey set
    # def create

class CryptoHoldingsViewSet(ModelViewSet):
    queryset = CryptoHoldings.objects.all()
    serializer_class = CryptoHoldingsSerializer


# class AppUserViewSet(ModelViewSet):
#     queryset = AppUser.objects.all()
#     serialzer_class = AppUserSerializer

    # def get_permissions(self):
    #     if self.request.method == 'POST':
    #         return (permissions.AllowAny(),)
    #     return (permissions.IsAdminUser(),)


