from dataclasses import fields
from rest_framework import serializers
from achievements.models import Achievements

class AchievementsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievements
        fields = '__all__'
        extra_kwargs = {'id':{'read_only':True}}