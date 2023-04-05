from django.db import models

# Create your models here.
class RopaModel(models.Model):
    title = models.CharField(max_length = 200)
    type = models.CharField(max_length = 200) # hoodie, t-shirt, pant
    # stock = models.  # stock = [ xl: 1, l:3, ]
    front_picture = models.ImageField()
    back_picture = models.ImageField()
    hasStock = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
