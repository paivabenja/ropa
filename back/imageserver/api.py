from rest_framework import viewsets, permissions
from .models import ImageModel
from .serializers import ImageSerializers

class ImageViewset(viewsets.ModelViewSet):
    queryset = ImageModel.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ImageSerializers
