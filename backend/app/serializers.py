from rest_framework import serializers
from .models import *
class reactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = '__all__'