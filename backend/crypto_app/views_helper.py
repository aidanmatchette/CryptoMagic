from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
import json

def error_request(error_msg):
    return JsonResponse({"error": error_msg}, status=400)

def bad_request():
    return error_request("There was an error with the request")

@csrf_exempt
def log_in(request):
    try:
        if request.method == 'POST':
            data = json.loads(request.body)

            username = data.get('email')
            password = data.get('password')

            user = authenticate(username=username, password=password)
            if user:
                login(request, user)
                return JsonResponse({'username': user.username}, staus=200)
    except Exception as e:
        return error_request(str(e))

    return bad_request()

@csrf_exempt
def logout(request):
    try:
        if request.method == 'POST':
            logout(request.user)
            return JsonResponse(data={'status': 'user was successfully logged out'}, status=200)
    except Exception as e:
        return error_request(str(e))
    
    return bad_request()