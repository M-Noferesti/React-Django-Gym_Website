from django.db.models import fields
from rest_framework import serializers
from enrolment.models import RequestedClasses,AttendingClassRequested,OnlineClassRequested,AttendingClassesEnrolled,OnlineClassesEnrolled
from classes.serializer import AttendingClassSerializer,OnlineClassSerializer

class RequestedAttendingClassesSerializer(serializers.ModelSerializer):
    attending_class = AttendingClassSerializer()
    class Meta:
        model = AttendingClassRequested
        fields = ['attending_class','period','price','the_then_monthly_fee']

class RequestedOnlineClassesSerializer(serializers.ModelSerializer):
    online_class = OnlineClassSerializer()
    class Meta:
        model = OnlineClassRequested
        fields = ['online_class','period','price','the_then_monthly_fee']

class EnrolmentSerializer(serializers.ModelSerializer):
    attending_classes = RequestedAttendingClassesSerializer(many=True,required=False,read_only=True)
    online_classes =RequestedOnlineClassesSerializer(many=True,required=False,read_only=True)
    class Meta:
        model = RequestedClasses
        fields = '__all__'
        extra_kwargs = {'id':{'read_only':True},'terminated':{'read_only':True},'paid':{'read_only':True},}


class EnrolledAttendingClassesSerializer(serializers.ModelSerializer):
    attending_class = AttendingClassSerializer()
    class Meta:
        model = AttendingClassesEnrolled
        fields = '__all__'
        extra_kwargs = {'id':{'read_only':True}}

class EnrolledOnlineClassesSerializer(serializers.ModelSerializer):
    online_class = OnlineClassSerializer()
    class Meta:
        model = OnlineClassesEnrolled
        fields = '__all__'
        extra_kwargs = {'id':{'read_only':True}}