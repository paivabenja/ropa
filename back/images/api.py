from rest_framework import viewsets, permissions
from .models import ImagesModel
from .serializers import ImagesSerializers

class ImagesViewset(viewsets.ModelViewSet):
    queryset = ImagesModel.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ImagesSerializers
