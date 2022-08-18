from rest_framework import serializers
from contact.models import ContactInfo

class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'
        extra_kwargs = {'id':{'read_only':True}}