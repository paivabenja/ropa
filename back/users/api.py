from rest_framework import viewsets, permissions
from .models import UserModel
from .serializers import UserSerializers


class UserViewset(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializers
