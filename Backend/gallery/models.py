from turtle import title
from django.db import models
from utils.image_handler import image_handler

class Tag(models.Model):
    tag = models.CharField(max_length=20)

    def __str__(self):
        return self.tag

class GalleryItem(models.Model):
    photo = models.ImageField(upload_to='gallery/%Y/%m/%d')
    title = models.CharField(null=True,blank=True,max_length=20)
    tag = models.ForeignKey(Tag,null=True,on_delete=models.SET_NULL)

    def __str__(self):
        return self.title if self.title else 'title'

image_handler(GalleryItem,'photo',600,True)