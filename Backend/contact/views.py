import email
from email import message
from django.http import HttpResponse
from rest_framework.generics import ListAPIView,RetrieveAPIView
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.authentication import TokenAuthentication
from utils.permissions import IsAdminOrReadOnly
from contact.serializer import ContactInfoSerializer
from contact.models import ContactInfo
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from operator import itemgetter
from rest_framework import status
from rest_framework.response import Response


class ContactInfoListAPIView(RetrieveAPIView, CreateModelMixin):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]
    serializer_class = ContactInfoSerializer

    def get_object(self):
        return ContactInfo.objects.first()


    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

@api_view(('POST',))
def send_email(requset):
    name ,email,message =  itemgetter('name','email','message')(requset.data)
    
    try:
        send_mail(
        name + ' پیام کاربر ',
        f'{email} : ایمیل کاربر \n {message} ',
        email,
        ['gymwebsiteproject2020@gmail.com'],
        fail_silently=False,)
        return Response('email sent successfuly', status=status.HTTP_200_OK)

    except:
        return Response('send email has been faild', status=status.HTTP_503_SERVICE_UNAVAILABLE)
