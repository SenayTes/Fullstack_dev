from django.urls import path, include
from .views import TaskList, TaskDetail, TaskCreate, TaskUpdate, TaskDelete, CustomLoginView, RegisterPage, TrackList
from django.contrib.auth.views import LogoutView
from .import views
from django.views.generic.base import RedirectView
from django.contrib.staticfiles.storage import staticfiles_storage

urlpatterns = [
    path('login/', CustomLoginView.as_view(), name='login'),
    path('register', RegisterPage.as_view(), name='register'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    path('', TaskList.as_view(), name='tasks'),
    path('task/<int:pk>/', TaskDetail.as_view(), name = 'task'),
    path('task-create', TaskCreate.as_view(), name='task-create'),
    path('task-update<int:pk>', TaskUpdate.as_view(), name='task-update'),
    path('task-delete<int:pk>', TaskDelete.as_view(), name='task-delete'),
    path('', TrackList.as_view(), name='tracks'),
    #path('static/todo/favicon.ico', RedirectView.as_view(url=staticfiles_storage.url('favicon.ico')))
    
]
