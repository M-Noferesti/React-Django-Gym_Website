from django.urls import path
from coaches.views import CoachesListAPIView,pagination
app_name = 'coaches'

urlpatterns = [
    path('', CoachesListAPIView.as_view(),name='coaches-list'),
    path('pagination', pagination,name='pagination'),
]