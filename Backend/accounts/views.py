from os import access
from django.http import request
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.mixins import UpdateModelMixin
from django.contrib.auth import get_user_model
from accounts.serializer import UserRegisterSerializer, TokenGenerateSerializer,UserProfileSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.settings import api_settings
from rest_framework_simplejwt.views import TokenObtainPairView
from accounts.serializer import JwtTokenGenerateSerializer
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from rest_framework import status
from rest_framework import serializers
from accounts.models import Profile

class UserListAPIView(ListAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminUser]
    queryset = Profile.objects.all()
    serializer_class = UserRegisterSerializer


class UserCreateAPIView(CreateAPIView):
    authentication_classes = []
    permission_classes = []
    serializer_class = UserRegisterSerializer


class TokenGenerateEndpoint(ObtainAuthToken):
    serializer_class = TokenGenerateSerializer
    renderer_classes = api_settings.DEFAULT_RENDERER_CLASSES




class JwtTokenGenerateEndpoint(TokenObtainPairView):
    serializer_class = JwtTokenGenerateSerializer


class UserProfileEndpoint(RetrieveAPIView, UpdateModelMixin):
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = UserProfileSerializer
    queryset = Profile

    def get_object(self):
        current_profile = self.queryset.objects.get(user=self.request.user)
        return current_profile

    def put(self, request):
        data = request.data   
        serializer = self.serializer_class(data=data,context={'request': request})
        current_user = self.get_object().user
        username = data['user']['username']
        email = data['user']['email']
        new_password = data['new_password']
        
        if serializer.is_valid():     
            if username != '' or username ==  current_user.username:
                current_user.username = username
            if email != '':
                current_user.email = email
            if new_password !='':
                current_user.set_password(new_password)    
            current_user.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)