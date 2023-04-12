from rest_framework import routers, urlpatterns
from .api import ImageViewset

router = routers.DefaultRouter()
router.register('api/images', ImageViewset, 'imageserver')
urlpatterns = router.urls
