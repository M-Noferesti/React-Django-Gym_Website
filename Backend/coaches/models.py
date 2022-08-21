from django.db import models
from django.conf import settings
from django.core.validators import MaxValueValidator, MinValueValidator
from classes.models import AttendingClass, OnlineClass 


User = settings.AUTH_USER_MODEL

class Coach(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    photo = models.ImageField(upload_to='coaches/%Y/%m/%d', blank=True)
    attending_classes = models.ManyToManyField(AttendingClass,related_name='attending_class',blank=True, null=True)
    online_classes = models.ManyToManyField(OnlineClass,related_name='online_class',blank=True, null=True)
    info_1 = models.CharField(max_length=200,blank=True)
    info_2 = models.CharField(max_length=200,blank=True)
    info_3 = models.CharField(max_length=200,blank=True)
    info_4 = models.CharField(max_length=200,blank=True)
    hire_date = models.DateField(auto_now_add=True)
    instagram_link = models.URLField(blank=True)
    facebook_link = models.URLField(blank=True)
    twitter_link = models.URLField(blank=True)

    def __str__(self):
        return self.user.username





