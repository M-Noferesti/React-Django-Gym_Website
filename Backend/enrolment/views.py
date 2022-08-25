from django.http import HttpResponse
from classes.models import AttendingClass,OnlineClass
from rest_framework.response import Response
from enrolment.models import AttendingClassRequested,AttendingClassesEnrolled
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView,RetrieveAPIView,UpdateAPIView
from enrolment.models import RequestedClasses,AttendingClassRequested,AttendingClassesEnrolled,OnlineClassRequested,OnlineClassesEnrolled
from enrolment.serializer import EnrolmentSerializer,RequestedAttendingClassesSerializer,EnrolledAttendingClassesSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from rest_framework.exceptions import NotFound

class SubmitRequestedClassesEndpoint(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = EnrolmentSerializer
    queryset = RequestedClasses

    def get_object(self):
        request = self.request
        current_requests = RequestedClasses.objects.get_current_requests(request.user)
        return current_requests

    def post(self, request, format=None):
        data = request.data       
        data['user'] = request.user.id

        serializer = EnrolmentSerializer(data=data)
        attending_classes = data['attending_classes']
        online_classes = data['online_classes']
        instance = self.get_object()
        if serializer.is_valid():
          
            if data['is_paid']: 
                instance.paid = True
                for x in attending_classes:
                    attending_class = AttendingClass.objects.get(id=x['id'])
                    AttendingClassesEnrolled.objects.create_or_update(
                    user = request.user,
                    attending_class = attending_class,
                    period = x['period'],
                )

                for x in online_classes:
                    online_class = OnlineClass.objects.get(id=x['id'])
                    OnlineClassesEnrolled.objects.create_or_update(
                    user = request.user,
                    online_class = online_class,
                    period = x['period'],
                )   
            instance.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SyncUserRequests(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = EnrolmentSerializer
    queryset = RequestedClasses

    def get_object(self):
        request = self.request
        current_requests = RequestedClasses.objects.get_current_requests(request.user)
        return current_requests

    def post(self, request, format=None):
        data = request.data       
        data['user'] = request.user.id

        serializer = EnrolmentSerializer(data=data)
        attending_classes = data['attending_classes']
        online_classes = data['online_classes']
        instance = self.get_object()
        if serializer.is_valid():
            for x in attending_classes:
                attending_class = AttendingClass.objects.get(id=x['id'])
                is_enrolled = AttendingClassesEnrolled.objects.filter(user=request.user,attending_class=attending_class)
                if not is_enrolled :
                    requested_attending_class = AttendingClassRequested.objects.create_or_update(
                        user = request.user,
                        attending_class = attending_class,
                        period = x['period'],
                        price = x['price'],
                    )
                       
                    instance.attending_classes.add(requested_attending_class)

            for x in online_classes:
                online_class = OnlineClass.objects.get(id=x['id'])
                is_enrolled = OnlineClassesEnrolled.objects.filter(user=request.user,online_class=online_class)
                if not is_enrolled :
                    requested_online_class = OnlineClassRequested.objects.create_or_update(
                        user = request.user,
                        online_class = online_class,
                        period = x['period'],
                        price = x['price'],
                    )
                    instance.online_classes.add(requested_online_class)
            instance.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
# add and reamove attending_classes from current requested classes list of user
class RequestedAttendingClassEndpoint(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = RequestedAttendingClassesSerializer
    queryset = AttendingClassRequested
    lookup_field = 'id'

    def get_object(self):
        request = self.request
        try:
            current_requsets = RequestedClasses.objects.get_current_requests(request.user)
            obj = current_requsets.attending_classes.all().get(attending_class__id=self.kwargs['id'])
            return obj
        except:
            raise NotFound('not found', code=404)

    def patch(self, request, *args, **kwargs):
        status = self.partial_update(request, *args, **kwargs)      
        return status

    def delete(self, request, *args, **kwargs):  
        obj = self.get_object()
        RequestedClasses.objects.get_current_requests(request.user).attending_classes.remove(self.get_object())
        obj.delete()
        return self.destroy(request, *args, **kwargs)
           
        

# create a new requested attending class with period one 
class RequestedAttendingClassesEndpoint(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = RequestedAttendingClassesSerializer

    def get_queryset(self):
        request = self.request
        current_requsets = RequestedClasses.objects.get_current_requests(request.user).attending_classes.all()
        return current_requsets

    def post(self,request, format=None):
        request = self.request
        data = request.data

        try:
            attending_class = AttendingClass.objects.get(id=data['id'])
            new_obj = AttendingClassRequested.objects.create_or_update(user=request.user,attending_class=attending_class,
                                                                period=1,price=attending_class.monthly_fee)
            RequestedClasses.objects.get_current_requests(request.user).attending_classes.add(new_obj)
            
            return Response(data, status=status.HTTP_201_CREATED)
        except:
            return Response('bad request', status=status.HTTP_400_BAD_REQUEST)


class EnrolledAttendingClassesEndpoint(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = EnrolledAttendingClassesSerializer

    def get_queryset(self):
        request = self.request
        enrolled_classes = AttendingClassesEnrolled.objects.filter(user=request.user)
        return enrolled_classes


class UserEnrollmentHistory(ListAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = EnrolmentSerializer

    def get_queryset(self):
        request = self.request
        try:
            enrolled_classes = RequestedClasses.objects.user_enroll_history(user=request.user)
            if enrolled_classes:
                return enrolled_classes.order_by('update_time')
        except AttributeError:
            pass


class RenewalAttendingClass(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication,TokenAuthentication]
    serializer_class = EnrolledAttendingClassesSerializer
    queryset = AttendingClassesEnrolled.objects.all()
    lookup_field = 'id' 
       
    def post(self,request,*args,**kwargs):
        attending_class_id = request.data['attending_class_id']
        attending_class = AttendingClass.objects.get(id= attending_class_id)
        AttendingClassesEnrolled.objects.create_or_update(user=self.request.user,attending_class=attending_class,
                                                                    period=request.data['period'])
        attending_class_requested =  AttendingClassRequested.objects.create(user=request.user,attending_class=attending_class,
                                                                    period=request.data['period'])
        requested_class = RequestedClasses.objects.create(user=request.user)
        requested_class.attending_classes.add(attending_class_requested)
        requested_class.paid = True
        requested_class.save()

        return Response(request.data, status=status.HTTP_200_OK)