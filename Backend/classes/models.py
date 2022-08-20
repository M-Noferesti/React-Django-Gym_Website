from django.db import models
from utils.image_handler import image_handler
from django.db.models.signals import pre_save
from django.forms import ValidationError

class Schedule(models.Model):
    class Day(models.TextChoices):
        saturday = 'شنبه' , 'شنبه',
        sunday = 'یکشنبه' , 'یکشنبه',
        monday = 'دوشنبه' , 'دوشنبه', 
        tuesday = 'سه شنبه' , 'سه شنبه',
        wednesday = 'چهارشنبه' , 'چهارشنبه',
        thursday = 'پنجشنبه' , 'پنجشنبه',
        friday = 'جمعه' , 'جمعه'

    day = models.CharField(max_length=10,choices=Day.choices)
    start_time = models.TimeField()
    end_time = models.TimeField()

    def __str__(self):
        return str(self.start_time) + '/' + str(self.end_time) + " " + str(self.day)

class BaseClass(models.Model):
    coach = models.ForeignKey('coaches.Coach', on_delete=models.SET_NULL,null=True)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    monthly_fee = models.IntegerField(default=0)
    is_published = models.BooleanField(default=True)
    schedule = models.ManyToManyField(Schedule)
   

    def __str__(self):
        return self.title

class AttendingClass(BaseClass):
    image = models.ImageField(upload_to= 'classes/attending_classes/%Y/%m/%d')


class OnlineClass(BaseClass):
    image = models.ImageField(upload_to= 'classes/private_online_classes/%Y/%m/%d')
    is_public = models.BooleanField(default=False)

    def clean(self):
        if not self.is_public and self.monthly_fee == 0 :
            raise ValidationError("private class should has a monthly_fee")



image_handler(BaseClass,'image',500,False)

# def set_public_online_classes(sender, instance, created, *args, **kwrags):
#     qs = Coach.objects.filter(id=instance.coach.id)
#     if str(instance.title) not in qs[0].classes:

#             presence_classes = str(instance.title) + "\n" + qs[0].classes
#             qs.update(classes = presence_classes)
# post_save.connect(set_public_online_classes,sender=PublicOnlineClass)

def check_online_class_monthly_fee(sender,instance, *args, **kwrags):
    if instance.is_public:
        instance.monthly_fee = 0
  

pre_save.connect(check_online_class_monthly_fee,sender=OnlineClass)