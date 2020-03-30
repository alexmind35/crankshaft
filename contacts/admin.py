from django.contrib import admin
from .models import Contact


@admin.register(Contact)
class AdminContact(admin.ModelAdmin):
    list_display = ['admin_image', 'position', 'phone', 'working', 'address', 'vk_social', 'ok_social', 'fb_social']
