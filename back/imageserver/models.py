from django.db import models

# Create your models here.
class ImageModel(models.Model):
    location = models.FilePathField()
