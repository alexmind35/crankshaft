from django.db import models
from django.contrib.auth.models import User

class Service(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField("Название", max_length=250)
    price = models.IntegerField("Цена")

    class Meta:
        verbose_name = "Услуги"
        verbose_name_plural = "Услуги"
        ordering = ["id"]

