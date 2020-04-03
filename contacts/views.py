from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin

import contacts
from .models import Contact


# @login_required
# def dashboard_user_page(request):
#     return render(request, "dashboard/dashboard_page.html")

# Переменные из этой функции доступны на всех страницах
def app_context(request):
    contact_model = contacts.models.Contact.objects.get(id=10)
    phone = contact_model.phone
    vk = contact_model.vk_social
    fb = contact_model.fb_social
    inst = contact_model.inst_social

    return {
        "landing_phone_url": phone,
        "landing_vk_url": vk,
        "landing_fb_url": fb,
        "landing_inst_url": inst,
    }


class OwnerMixin(object):
    def get_queryset(self):
        qs = super(OwnerMixin, self).get_queryset()
        return qs.filter(owner=self.request.user)


class OwnerEditMixin(object):
    def form_valid(self, form):
        form.instance.owner = self.request.user
        return super(OwnerEditMixin, self).form_valid(form)


class OwnerContactMixin(OwnerMixin, LoginRequiredMixin):
    model = Contact
    fields = ['photo', 'name', 'position', 'phone', 'working', 'address', 'vk_social', 'fb_social', 'inst_social']
    success_url = reverse_lazy('manage_contact_list')


class OwnerContactEditMixin(OwnerContactMixin, OwnerEditMixin):
    fields = ['photo', 'name', 'position', 'phone', 'working', 'address', 'vk_social', 'fb_social', 'inst_social']
    success_url = reverse_lazy('manage_contact_list')
    template_name = 'dashboard/contacts/contacts_add.html'


class ManageContactListView(OwnerContactMixin, ListView):
    template_name = 'dashboard/contacts/contacts_list.html'


class ContactCreateView(PermissionRequiredMixin, OwnerContactEditMixin, CreateView):
    permission_required = 'contacts.add_contact'


class ContactUpdateView(PermissionRequiredMixin, OwnerContactEditMixin, UpdateView):
    permission_required = 'contacts.change_contact'


class ContactDeleteView(PermissionRequiredMixin, OwnerContactMixin, DeleteView):
    template_name = 'dashboard/contacts/contacts_delete.html'
    success_url = reverse_lazy('manage_contact_list')
    permission_required = 'contacts.delete_contact'
