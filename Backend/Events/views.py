from rest_framework import viewsets
from .models import Event, Like
from .serializers import EventSerializer, LikeSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes


# Create your views here.


class EventViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    def list(self, request):
        eve = Event.objects.filter(owner=request.user)
        serializer = EventSerializer(eve, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk = None):

        id = pk
        if id is not None:
            eve = Event.objects.get(id=id)
            serializer = EventSerializer(eve)
            return Response(serializer.data, status=status.HTTP_200_OK)

        

    def create(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response({'msg':'data created '} ,status=status.HTTP_201_CREATED)
        return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk=None):
        if pk is not None:
            eve = Event.objects.get(id=pk)
            serializer = Event(eve, data=request.data)
            if serializer.is_valid():
                serializer.save(owner=request.user)
                return Response({'msg':"success data updated"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_200_OK)
        
    def partial_update(self, request, pk):
        id = pk
        eve = Event.objects.get(id = id)
        serializer = EventSerializer(eve, data= request.data , partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'Partial data Updated '} ,status=status.HTTP_200_OK)
        return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)
    
    def destroy(self, request, pk=None):
        if pk is not None:
            eve = Event.objects.get(id=pk)
            eve.delete()
            return Response({"msg":"data deleted"}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def like_event(request, pk):
    event = Event.objects.get(id=pk)
    like, created = Like.objects.get_or_create(user=request.user, event=event)
    if not created and like.is_like:
        like.is_like = False
        like.save()
    else:
        like.is_like = True
        like.save()
    serializer = LikeSerializer(like)
    return Response(serializer.data)


class AllEvent(viewsets.ViewSet):
    

    def list(self, request):
        eve = Event.objects.all()
        serializer = EventSerializer(eve, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
