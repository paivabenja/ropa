from rest_framework import serializers
from .models import ImagesModel

class ImagesSerializers(serializers.ModelSerializer):
    class Meta:
        model = ImagesModel
        fields = ['id', 'path', 'type']
