from django.urls import path
from . import views

urlpatterns = [
    path('list/',
         views.ManageContactListView.as_view(),
         name='manage_contact_list'),
    path('create/',
         views.ContactCreateView.as_view(),
         name='contact_create'),
    path('<pk>/edit/',
         views.ContactUpdateView.as_view(),
         name='contact_edit'),
    path('delete/',
         views.ContactDeleteView.as_view(),
         name='contact_delete'),
]
