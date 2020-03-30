from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from .models import Contact


# @login_required
# def dashboard_user_page(request):
#     return render(request, "dashboard/dashboard_page.html")

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
    fields = ['photo', 'position', 'phone', 'working', 'address', 'vk_social', 'ok_social', 'fb_social']
    success_url = reverse_lazy('manage_contact_list')



class OwnerContactEditMixin(OwnerContactMixin, OwnerEditMixin):
    fields = ['photo', 'position', 'phone', 'working', 'address', 'vk_social', 'ok_social', 'fb_social']
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
