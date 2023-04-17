from django.db import models

# Create your models here.


class ImagesModel(models.Model):
    path = models.CharField(max_length=200)
    imgFront = models.ImageField()
    imgBack = models.ImageField()
    type = models.CharField(max_length=200)
