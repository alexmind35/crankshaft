from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, PermissionRequiredMixin
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.list import ListView

from contacts.models import Contact
from .models import Service


def index_page(request):
    return render(request, "landing_page.html", {
        'services': Service.objects.all(),
        'contacts': Contact.objects.all(),

    })


def error_404_view(request, exception):
    return render(request, 'errors/404.html')


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


class OwnerServiceMixin(OwnerMixin, LoginRequiredMixin):
    model = Service
    fields = ['name', 'price']
    success_url = reverse_lazy('manage_service_list')


class OwnerServiceEditMixin(OwnerServiceMixin, OwnerEditMixin):
    fields = ['name', 'price']
    success_url = reverse_lazy('manage_service_list')
    template_name = 'dashboard/services/services_add.html'


class ManageServiceListView(OwnerServiceMixin, ListView):
    template_name = 'dashboard/services/services_list.html'


class ServiceCreateView(PermissionRequiredMixin, OwnerServiceEditMixin, CreateView):
    permission_required = 'services.add_service'


class ServiceUpdateView(PermissionRequiredMixin, OwnerServiceEditMixin, UpdateView):
    permission_required = 'services.change_service'


class ServiceDeleteView(PermissionRequiredMixin, OwnerServiceMixin, DeleteView):
    template_name = 'dashboard/services/services_delete.html'
    success_url = reverse_lazy('manage_service_list')
    permission_required = 'services.delete_service'


@login_required
def logout_user(request):
    logout(request)
    return render(request, "registration/logout.html")
