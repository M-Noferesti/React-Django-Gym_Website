from classes.models import OnlineClass
from rest_framework.response import Response
from enrolment.models import OnlineClassRequested,OnlineClassesEnrolled
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView,RetrieveAPIView
from enrolment.models import RequestedClasses,OnlineClassRequested,OnlineClassesEnrolled
from enrolment.serializer import EnrolmentSerializer,RequestedOnlineClassesSerializer,EnrolledOnlineClassesSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from rest_framework.exceptions import NotFound


class RequestedOnlineClassEndpoint(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = RequestedOnlineClassesSerializer
    queryset = OnlineClassRequested
    lookup_field = 'id'

    def get_object(self):
        request = self.request
        try:
            current_requsets = RequestedClasses.objects.get_current_requests(request.user)
            obj = current_requsets.online_classes.all().get(online_class__id=self.kwargs['id'])
            return obj
        except:
            raise NotFound('not found', code=404)

    def patch(self, request, *args, **kwargs):
        status = self.partial_update(request, *args, **kwargs)      
        # RequestedClasses.objects.get_current_requests(request.user).online_classes.add(self.get_object())
        return status

    def delete(self, request, *args, **kwargs):  
        obj = self.get_object()
        RequestedClasses.objects.get_current_requests(request.user).online_classes.remove(self.get_object())
        obj.delete()
        return self.destroy(request, *args, **kwargs)
           
        

class RequestedOnlineClassesEndpoint(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = RequestedOnlineClassesSerializer

    def get_queryset(self):
        request = self.request
        current_requsets = RequestedClasses.objects.get_current_requests(request.user).online_classes.all()
        return current_requsets

    def post(self,request, format=None):
        request = self.request
        data = request.data

        try:
            online_class = OnlineClass.objects.get(id=data['id'])
            new_obj = OnlineClassRequested.objects.create_or_update(user=request.user,online_class=online_class,
                                                                period=1,price=online_class.monthly_fee)
            RequestedClasses.objects.get_current_requests(request.user).online_classes.add(new_obj)
            
            return Response(data, status=status.HTTP_201_CREATED)
        except:
            return Response('bad request', status=status.HTTP_400_BAD_REQUEST)


class EnrolledOnlineClassesEndpoint(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = EnrolledOnlineClassesSerializer

    def get_queryset(self):
        request = self.request
        enrolled_classes = OnlineClassesEnrolled.objects.filter(user=request.user)
        return enrolled_classes


class RenewalOnlineClass(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = EnrolledOnlineClassesSerializer
    queryset = OnlineClassesEnrolled.objects.all()
    lookup_field = 'id' 
       
    def post(self,request,*args,**kwargs):
        online_class_id = request.data['online_class_id']
        online_class = OnlineClass.objects.get(id= online_class_id)
        OnlineClassesEnrolled.objects.create_or_update(user=self.request.user,online_class=online_class,
                                                                    period=request.data['period'])
        online_class_requested =  OnlineClassRequested.objects.create(user=request.user,online_class=online_class,
                                                                    period=request.data['period'])
        requested_class = RequestedClasses.objects.create(user=request.user)
        requested_class.online_classes.add(online_class_requested)
        requested_class.paid = True
        requested_class.save()
        return Response(request.data, status=status.HTTP_200_OK)