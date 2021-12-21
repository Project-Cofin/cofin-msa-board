from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from QnA import views

urlpatterns = [
    path(r'', views.QnA),
    path(r'find', views.find)
]