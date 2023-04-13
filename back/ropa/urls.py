from rest_framework import routers, urlpatterns
from .api import RopaViewset

router = routers.DefaultRouter()
router.register('api/ropa', RopaViewset, 'ropa')
urlpatterns = router.urls
