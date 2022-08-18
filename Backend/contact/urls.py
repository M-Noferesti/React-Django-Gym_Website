from django.urls import path
from contact.views import ContactInfoListAPIView,send_email
app_name = 'contact'

urlpatterns = [
    path('', ContactInfoListAPIView.as_view(),name='contact-list'),
    path('send-email',send_email,name='send-email')
]