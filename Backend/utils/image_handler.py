from PIL import Image
from django.db.models.signals import post_delete, post_save
import os


def image_handler(class_,property,image_size,self_class):

    def resize_image( instance, *args, **kwrags):
        with Image.open(getattr(instance, property).path) as img:
             if img.height > image_size or img.width > image_size:
                new_img = (image_size, image_size)
                img.thumbnail(new_img)
                img.save(getattr(instance, property).path,"JPEG")
               
            


    def delete_old_image( instance, *args, **kwrags):
        os.remove(getattr(instance, property).path)
    if self_class == True:
        post_delete.connect(delete_old_image,sender=class_)
        post_save.connect(resize_image, sender=class_)

    for subclass in class_.__subclasses__():
        post_delete.connect(delete_old_image,sender=subclass)
        post_save.connect(resize_image, sender=subclass)