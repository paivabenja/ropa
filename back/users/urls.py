from django.urls import path, include
from rest_framework import routers
from .api import UserViewset

router = routers.DefaultRouter()
router.register(r'users', UserViewset, 'users')
urlpatterns = [
    path("api/", include(router.urls))
]
