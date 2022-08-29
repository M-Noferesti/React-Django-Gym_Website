from django.urls import path
from achievements.views import GetAchievementsAPI

app_name = 'achievements'
urlpatterns = [
path('',GetAchievementsAPI.as_view(),name='get_achievements')]