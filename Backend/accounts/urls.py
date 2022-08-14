from django.urls import path
from accounts.views import (UserCreateAPIView, UserListAPIView, TokenGenerateEndpoint,
                            JwtTokenGenerateEndpoint,UserProfileEndpoint)
from rest_framework.authtoken import views
from rest_framework.authtoken.views import obtain_auth_token
app_name = 'accounts'

urlpatterns = [
    path('', UserListAPIView.as_view(), name='users_list'),
    path('create_user', UserCreateAPIView.as_view(), name='create_user'),
    path('token', TokenGenerateEndpoint.as_view(), name='token'),
    path('jwt_token/', JwtTokenGenerateEndpoint.as_view(), name='jwt_token'),
    path('profile/', UserProfileEndpoint.as_view(), name='profile'),
]