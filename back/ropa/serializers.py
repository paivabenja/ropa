from rest_framework import serializers
from .models import RopaModel

class RopaSerializers(serializers.ModelSerializer):
    class Meta:
        model = RopaModel 
        fields = ('id', 'title', 'type', 'imgs', 'hasStock', 'created_at', 'price') # 'stock', 
        read_only_fields = ('created_at',)
