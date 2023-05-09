from django.db import models
from Auth_api.models import User
# Create your models here.


class Event(models.Model): 
    event_name = models.CharField(max_length=100)
    date = models.DateField(null=False)
    time = models.TimeField(null=False)
    location = models.CharField(max_length=200)
    image = models.ImageField(upload_to='Images/', default='Images/None/No0img.jpg')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE) 

class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    is_like = models.BooleanField(default=True)