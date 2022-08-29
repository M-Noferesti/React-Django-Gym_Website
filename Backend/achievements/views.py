from django.shortcuts import render
from rest_framework.generics import ListAPIView
from achievements.models import Achievements
from achievements.serializer import AchievementsSerializer
from utils.permissions import IsAdminOrReadOnly
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.authentication import TokenAuthentication



class GetAchievementsAPI(ListAPIView):
    permission_classes = [IsAdminOrReadOnly]
    authentication_classes = [TokenAuthentication,JWTAuthentication]
    queryset = Achievements.objects.all()
    serializer_class = AchievementsSerializer
