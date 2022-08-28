from rest_framework import serializers
from gallery.models import GalleryItem,Tag


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = '__all__'
        extra_kwargs = {'id':{'read_only':True}}
        


class GallerySerializer(serializers.ModelSerializer):
    tag = serializers.CharField(source='tag.tag')
    class Meta:
        model = GalleryItem
        fields = '__all__'
        extra_kwargs = {'id':{'read_only':True}}