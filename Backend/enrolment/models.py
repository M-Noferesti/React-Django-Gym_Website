from django.db import  models
from django.conf import settings
from django.db.models.signals import m2m_changed, pre_save


User = settings.AUTH_USER_MODEL


class AttendingClassRequestedManager(models.Manager):
    def create_or_update(self,user,attending_class,period,price):
        try:
            current_requsets = RequestedClasses.objects.get_current_requests(user).attending_classes.all()
            obj = current_requsets.get(attending_class=attending_class)

        except:
            obj = None
            
        if obj:
            obj.period = period
            obj.save()
            return  obj

        return (self.model.objects.create(user=user,attending_class=attending_class,
                                            period=period,price=price))

class OnlineClassRequestedManager(models.Manager):
    def create_or_update(self,user,online_class,period,price):
        try:
            current_requsets = RequestedClasses.objects.get_current_requests(user).online_classes.all()
            obj = current_requsets.get(online_class=online_class)

        except:
            obj = None
            
        if obj:
            obj.period = period
            obj.save()
            return  obj

        return (self.model.objects.create(user=user,online_class=online_class,
                                            period=period,price=price))

class BaseClassRequested(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    period = models.IntegerField(default=1)
    price = models.IntegerField(default=0)
    the_then_monthly_fee = models.IntegerField(default=0)

    class Meta:
        abstract = True

class AttendingClassRequested(BaseClassRequested):
    attending_class = models.ForeignKey('classes.AttendingClass',on_delete=models.CASCADE)
    objects = AttendingClassRequestedManager()

class OnlineClassRequested(BaseClassRequested):
    online_class = models.ForeignKey('classes.OnlineClass',on_delete=models.CASCADE)
    objects = OnlineClassRequestedManager()  


class RequestedClassesManager(models.Manager):

    def user_enroll_history(self,user):
        qs = self.get_queryset().filter(user=user,paid=True)
        if qs.exists():
          return qs

    def get_current_requests(self,user):
        qs = self.get_queryset().filter(user=user,paid=False)
        if qs.exists():
            return qs.first()
        else:
            return self.model.objects.create(user=user)


        
class RequestedClasses(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    attending_classes = models.ManyToManyField(AttendingClassRequested,blank=True,null=True)
    online_classes = models.ManyToManyField(OnlineClassRequested,blank=True,null=True)
    total_price = models.IntegerField(blank=True,null=True,default=0)
    timestamp = models.DateTimeField(auto_now_add=True)
    update_time= models.DateTimeField(auto_now=True)
    paid = models.BooleanField(default=False)

    objects = RequestedClassesManager()

    def __str__(self):
        return "درخواست های شماره  " + str(self.id) 
    class Meta:
        verbose_name_plural = 'enrollments'


                                            
class AttendingClassesEnrolledManager(models.Manager):
    def create_or_update(self,user,attending_class,period):
        try:     
            obj = self.get_queryset().get(attending_class=attending_class,user=user)

        except:
            obj = None
            
        if obj:
            obj.left_days += (period * 30)
            obj.save()
            return  obj

        return (self.model.objects.create(user=user,attending_class=attending_class,left_days=(period * 30)))


class OnlineClassesEnrolledManager(models.Manager):
    def create_or_update(self,user,online_class,period):
        try:     
            obj = self.get_queryset().get(online_class=online_class,user=user)

        except:
            obj = None
            
        if obj:
            obj.left_days += (period * 30)
            obj.save()
            return  obj

        return (self.model.objects.create(user=user,online_class=online_class,left_days=(period * 30)))

class BaseClassesEnrolled(models.Model):
    user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
    left_days = models.IntegerField(default=0)
    update_time= models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        
class AttendingClassesEnrolled(BaseClassesEnrolled):
    attending_class = models.ForeignKey('classes.AttendingClass',on_delete=models.CASCADE)
    objects = AttendingClassesEnrolledManager()


class OnlineClassesEnrolled(BaseClassesEnrolled):
    online_class = models.ForeignKey('classes.OnlineClass',on_delete=models.CASCADE)
    objects = OnlineClassesEnrolledManager()


def total_price_change_receiver(instance, action,*args,**kwargs):
    if action in ['post_add','post_remove' ,'post_clear','pre_remove']:
        selected_classes = instance.attending_classes.all()
        selected_online_classes = instance.online_classes.all()
        total = 0
        
        for x in selected_classes:
            total += x.price
        for y in selected_online_classes:
            total += y.price
            
        instance.total_price = total
        instance.save()

m2m_changed.connect(total_price_change_receiver, sender=RequestedClasses.attending_classes.through)
m2m_changed.connect(total_price_change_receiver, sender=RequestedClasses.online_classes.through)


def attending_class_price_calculator_receiver(instance,*args,**kwargs):
        instance.price = instance.attending_class.monthly_fee * instance.period
        instance.the_then_monthly_fee = instance.attending_class.monthly_fee


def online_class_price_calculator_receiver(instance,*args,**kwargs):
        instance.price = instance.online_class.monthly_fee * instance.period
        instance.the_then_monthly_fee = instance.online_class.monthly_fee


pre_save.connect(attending_class_price_calculator_receiver,sender=AttendingClassRequested)
pre_save.connect(online_class_price_calculator_receiver,sender=OnlineClassRequested)

