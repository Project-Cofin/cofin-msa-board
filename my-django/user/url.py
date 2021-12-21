from django.urls import path, include

from user import views

urlpatterns = [
    path(r'', views.users),
    path(r'login', views.login),
    path(r'exist/<email>', views.exist),
    path(r'find', views.user),
]