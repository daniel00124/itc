from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import React
from .serializers import reactSerializer

class ReactView(APIView):
    def get(self, request):
        data = React.objects.all()
        serializer = reactSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = reactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ReactDetailView(APIView):
    def get(self, request, pk):
        item = get_object_or_404(React, pk=pk)
        serializer = reactSerializer(item)
        return Response(serializer.data)

    def delete(self, request, pk):
        item = get_object_or_404(React, pk=pk)
        item.delete()
        return Response({"message": "deleted"}, status=status.HTTP_200_OK)
