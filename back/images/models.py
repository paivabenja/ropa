from django.db import models

# Create your models here.
class ImagesModel(models.Model):
    path = models.CharField(max_length = 200)
    type = models.CharField(max_length = 200)
