from rest_framework import routers, urlpatterns
from .api import ImagesViewset

router = routers.DefaultRouter()
router.register('api/images', ImagesViewset, 'images')
urlpatterns = router.urls
