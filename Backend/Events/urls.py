from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, like_event, AllEvent

router = DefaultRouter()
router.register('', EventViewSet, basename='event')

urlpatterns = [
    path('', include(router.urls)),
    path('eve/<int:pk>/like/', like_event, name='like_event'),
    
]