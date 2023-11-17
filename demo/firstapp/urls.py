from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("members/", views.members, name="Members"),
    path("menu/", views.menu, name="menu")
]