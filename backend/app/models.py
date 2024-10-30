from django.db import models

# Create your models here.
class React(models.Model):
    url = models.CharField(max_length=200)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    last_checked = models.DateTimeField(auto_now=True)
    packet_count = models.IntegerField(default=0)
    packet_loss = models.FloatField(default=0.0)
