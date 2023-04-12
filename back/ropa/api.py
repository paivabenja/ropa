from rest_framework import viewsets, permissions
from .models import RopaModel
from .serializers import RopaSerializers

class RopaViewset(viewsets.ModelViewSet):
    queryset = RopaModel.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RopaSerializers
