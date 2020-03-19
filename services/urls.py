from django.urls import path
from . import views


urlpatterns = [
    path('list/',
         views.ManageServiceListView.as_view(),
         name='manage_service_list'),
    path('create/',
         views.ServiceCreateView.as_view(),
         name='service_create'),
    path('<pk>/edit/',
         views.ServiceUpdateView.as_view(),
         name='service_edit'),
    path('<pk>/delete/',
         views.ServiceDeleteView.as_view(),
         name='service_delete'),
]