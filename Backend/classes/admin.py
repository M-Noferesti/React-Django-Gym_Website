from django.contrib import admin
from classes.models import AttendingClass, OnlineClass, Schedule
from django.forms import ValidationError

admin.site.register(Schedule)
admin.site.register(AttendingClass)
admin.site.register(OnlineClass)
