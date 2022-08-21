from rest_framework import serializers
from classes import serializer
from coaches.models import Coach


class CoachSerializer(serializers.ModelSerializer):
    attending_classes = serializer.AttendingClassSerializer(many=True,remove_fields=True)
    online_classes = serializer.OnlineClassSerializer(many=True,remove_fields=True)
    username = serializers.CharField(source='user')

    class Meta:
        model = Coach
        exclude = ['user']
        extra_kwargs = {'id':{'read_only':True},'user':{'read_only':True}}