from rest_framework import routers, urlpatterns
from .api import UserViewset

router = routers.DefaultRouter()
router.register('api/user', UserViewset, 'user')
urlpatterns = router.urls
