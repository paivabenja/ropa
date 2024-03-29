from django.db import models

# Create your models here.
class RopaModel(models.Model):
    title = models.CharField(max_length = 200)
    type = models.CharField(max_length = 200)
    price = models.IntegerField()
    imgs = models.IntegerField()
    hasStock = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
