from sysconfig import is_python_build
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework.mixins import UpdateModelMixin, DestroyModelMixin
from classes.models import AttendingClass, OnlineClass
from classes import serializer
from utils.permissions import IsAdminOrReadOnly
from rest_framework.authentication import TokenAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from rest_framework.decorators import api_view
from utils.pagination import Pagination


PAGE_SIZE = 3

class BaseClassListAPIView(ListCreateAPIView):
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]
    pagination = Pagination(PAGE_SIZE)
    pagination_class = pagination




class AttendingClassListAPIView(BaseClassListAPIView):
    queryset = AttendingClass.objects.filter(is_published=True)
    serializer_class = serializer.AttendingClassSerializer


@api_view(('GET',))
def attending_classes_pagination(request):
    total_items = AttendingClass.objects.filter(is_published=True).count()
    if total_items % PAGE_SIZE != 0 :
            total_pages =  int((total_items/PAGE_SIZE) + 1)
    else:
            total_pages = total_items / PAGE_SIZE
    return Response({'total_pages':total_pages})




class PrivateOnlineClassListAPIView(BaseClassListAPIView):
    queryset = OnlineClass.objects.filter(is_public=False,is_published=True)
    serializer_class = serializer.OnlineClassSerializer

@api_view(('GET',))
def private_online_classes_pagination(request):
    total_items = OnlineClass.objects.filter(is_public=False,is_published=True).count()
    if total_items % PAGE_SIZE != 0 :
            total_pages =  int((total_items/PAGE_SIZE) + 1)
    else:
            total_pages = total_items / PAGE_SIZE
    return Response({'total_pages':total_pages})



class PublicOnlineClassListAPIView(BaseClassListAPIView):
    queryset = OnlineClass.objects.filter(is_public=True,is_published=True)
    serializer_class = serializer.OnlineClassSerializer

@api_view(('GET',))
def public_online_classes_pagination(request):
    total_items = OnlineClass.objects.filter(is_public=True,is_published=True).count()
    if total_items % PAGE_SIZE != 0 :
            total_pages =  int((total_items/PAGE_SIZE) + 1)
    else:
            total_pages = total_items / PAGE_SIZE
    return Response({'total_pages':total_pages})



'''DetailAPI Views'''

class BaseClassDetailAPIView(RetrieveAPIView, UpdateModelMixin, DestroyModelMixin):
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = 'id'

    def get_queryset(self):
        qs = self.queryset.objects.filter(is_published=True)
        return qs

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class AttendingClassDetailAPIView(BaseClassDetailAPIView):
    queryset = AttendingClass
    serializer_class = serializer.AttendingClassSerializer


class PrivateOnlineClassDetailAPIView(BaseClassDetailAPIView):
    def get_queryset(self):
        qs = OnlineClass.objects.filter(is_published=True,is_public=False)
        return qs

    serializer_class = serializer.OnlineClassSerializer


class PublicOnlineClassDetailAPIView(BaseClassDetailAPIView):
    def get_queryset(self):
        qs = OnlineClass.objects.filter(is_published=True,is_public=True)
        return qs

    serializer_class = serializer.OnlineClassSerializer
