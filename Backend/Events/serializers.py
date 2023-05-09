from rest_framework import serializers
from .models import Event, Like


class EventSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length= None, use_url =True)
    class Meta:
        model = Event
        fields = ['id','event_name', 'date', 'time', 'location', 'image',  'created_at', 'updated_at']


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'