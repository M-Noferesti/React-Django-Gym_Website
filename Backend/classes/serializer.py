from dataclasses import field
from rest_framework import serializers
from coaches.models import Coach
from classes.models import AttendingClass, OnlineClass, Schedule

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = ['day','start_time','end_time']


class Meta:
    def __init__(self, model):
        self.model =  model
    fields = '__all__'
    extra_kwargs = {'id':{'read_only':True}}


class CoachSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user')
    class Meta:
        model = Coach
        exclude = ['attending_classes','online_classes']
        extra_kwargs = {'id':{'read_only':True}}

class BaseClassSerializer(serializers.ModelSerializer):
    schedule = ScheduleSerializer(read_only=True, many=True)
    coach = CoachSerializer()
    def __init__(self, *args, **kwargs):
        isRemoved = kwargs.pop('remove_fields', False)
        super(BaseClassSerializer, self).__init__(*args, **kwargs)
        remove_fields = ['id', 'description', 'monthly_fee', 'is_published' ,'image', 'schedule']

        if isRemoved:
            for field_name in remove_fields:
                self.fields.pop(field_name)
    
class AttendingClassSerializer(BaseClassSerializer):
    Meta = Meta(model=AttendingClass)


class OnlineClassSerializer(BaseClassSerializer):
    Meta = Meta(model=OnlineClass)

