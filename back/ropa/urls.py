from django.urls import path, include
from rest_framework import routers
from .api import RopaViewset

router = routers.DefaultRouter()
router.register('ropa', RopaViewset, 'ropa')

urlpatterns = [
    path('api/', include(router.urls))
]
