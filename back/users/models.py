from django.db import models


# Create your models here.
class UserModel (models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.EmailField(blank=False)

    def __str__(self):
        return self.username
