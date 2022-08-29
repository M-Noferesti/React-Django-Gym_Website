from django.db import models

class Achievements(models.Model):
    description = models.TextField()
    image = models.ImageField(upload_to='achievements/%Y/%m/%d')

    def __str__(self):
        return f'دستاورد شماره {self.id}'