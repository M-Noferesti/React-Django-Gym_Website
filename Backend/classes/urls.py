from django.urls import path
from classes import views 

app_name = 'classes'

urlpatterns = [
    path('attending-classes', views.AttendingClassListAPIView.as_view(),name='attending-classes'),
    path('attending-classes/pagination', views.attending_classes_pagination,name='attending_class_pagination'),
    path('private-online-classes', views.PrivateOnlineClassListAPIView.as_view(),name='private-online-classes'),
    path('private-online-classes/pagination', 
            views.private_online_classes_pagination,
            name='private_online_classes_pagination'),

    path('public-online-classes', views.PublicOnlineClassListAPIView.as_view(),name='public-online-classes'),
    path('public-online-classes/pagination', 
            views.public_online_classes_pagination,
            name='public_online_classes_pagination'),
    path('attending-classes/<int:id>', views.AttendingClassDetailAPIView.as_view(),name='attending-class-detail'),
    path('private-online-classes/<int:id>', views.PrivateOnlineClassDetailAPIView.as_view(),name='private-online-class-detail'),
    path('public-online-classes/<int:id>', views.PublicOnlineClassDetailAPIView.as_view(),name='public-online-class-detail'),
]