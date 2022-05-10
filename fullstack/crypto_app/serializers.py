from hashlib import new
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *


    # def perform_create(self, serializer):
    #     serializer.save(user=self.request.user)

class CryptoHoldingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CryptoHoldings 
        fields = ['id', 'portfolio', 'coin_id']


class PortfolioSerializer(serializers.ModelSerializer):
    holdings = CryptoHoldingsSerializer(many=True, read_only=True)
    class Meta:
        model = Portfolio
        fields = ['id', 'portfolio_name', 'owner', 'holdings']

    def create(self, validated_data):
        try:
            new_item = super().create(validated_data)
            return new_item
        except Exception as e:
            print('------- error -------', e)


class AppUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    class Meta:
        model = AppUser
        fields = ['id','name','email', "password"]

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)
