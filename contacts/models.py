from django.contrib.auth.models import User
from django.db import models


class Contact(models.Model):
    photo = models.ImageField("Фотография", upload_to="contacts/photo", default="", blank=True, null=True)
    position = models.CharField("Должность", max_length=50, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    phone = models.CharField("Телефон", max_length=30)
    working = models.CharField("Режим работы", max_length=170)
    address = models.CharField("Адрес", max_length=170)

    vk_social = models.URLField("Ссылка Вконтакте", blank=True)
    ok_social = models.URLField("Ссылка Одноклассники", blank=True)
    fb_social = models.URLField("Ссылка Facebook", blank=True)

    class Meta:
        verbose_name = "Контакты"
        verbose_name_plural = "Контакты"

    def admin_image(self):
        if self.photo:
            from django.utils.safestring import mark_safe
            return mark_safe(
                u'<a href="{0}" target="_blank"><img src="{0}" width="100"/></a>'.format(self.photo.url))
        else:
            return '(Нет изображения)'

    admin_image.short_description = 'Фотография'
    admin_image.allow_tags = True


