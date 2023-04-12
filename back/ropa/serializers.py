from rest_framework import serializers
from .models import RopaModel

class RopaSerializers(serializers.ModelSerializer):
    class Meta:
        model = RopaModel 
        fields = ('id', 'title', 'type', 'front_picture', 'back_picture', 'hasStock', 'created_at') # 'stock', 
        read_only_fields = ('created_at',)
