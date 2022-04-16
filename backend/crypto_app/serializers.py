from dataclasses import fields
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class PortfolioSerializer(serializers.ModelSerializer):
    model = Portfolio
    fields = ['id', 'portfolio_name', 'owner']

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class CryptoCoinSerializer(serializers.ModelSerializer):
    model = CryptoCoin
    fields = ['id', 'name', 'name_id', 'quantity', 'coinst']

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppUser
        fields = ['id','name','email', "password"]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
