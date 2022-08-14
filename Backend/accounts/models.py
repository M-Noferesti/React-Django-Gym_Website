from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save

User = get_user_model()

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to= 'users_avatars/%Y/%m/%d',default='users_avatars/default_avatar.jpg')


def create_profile(sender,instance,created,*args,**kwargs):
    if created:
        Profile.objects.create(user=instance)

post_save.connect(create_profile,User)
