from django.urls import path
from . import views

urlpatterns = [
    path("", views.base, name="base"),
    path("members/", views.members, name="Members"),
    path("menu/", views.menu, name="menu")
]