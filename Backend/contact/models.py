import email
from django.db import models

class ContactInfo(models.Model):
    email = models.EmailField()
    address = models.TextField()
    telephone = models.IntegerField()
    instagram_link = models.URLField()
    facebook_link = models.URLField()
    twitter_link = models.URLField()
