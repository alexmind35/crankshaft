from django.contrib import admin
from .models import Service


@admin.register(Service)
class AdminService(admin.ModelAdmin):
    list_display = ["name", "price"]
