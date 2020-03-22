from django.db import models
from django.contrib.auth.models import User

class Contact(models.Model):
    photo = models.ImageField("Фотография", upload_to="contacts/photo", default="", blank=True)
    position = models.CharField("Должность", max_length=50, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.CharField("Телефон", max_length=30)
    working = models.CharField("Режим работы", max_length=170)
    address = models.CharField("Адрес", max_length=170)

    vk_social = models.URLField("Ссылка Вконтакте", blank=True)
    ok_social = models.URLField("Ссылка Одноклассники", blank=True)
    fb_social = models.URLField("Ссылка Facebook", blank=True)
    tw_social = models.URLField("Ссылка Twitter", blank=True)
    inst_social = models.URLField("Ссылка Instagram", blank=True)
    ok_social = models.URLField("Ссылка Одноклассники", blank=True)

    class Meta:
        verbose_name = "Контакты"
        verbose_name_plural = "Контакты"


