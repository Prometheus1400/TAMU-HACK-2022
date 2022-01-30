from django.urls import path
from . import views

urlpatterns = [
    path('getUserInfo/', views.handle_login),
    path('saveUserInfo/', views.update_user)
]