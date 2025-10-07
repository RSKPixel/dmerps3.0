from django.urls import path
from tallydata import views
urlpatterns = [
    path('inventorymaster/', views.inventorymaster),
    path('accountmaster/', views.accountmaster),
    path('costcentre/', views.costcentre),
    path('costcentre-grouped/', views.costcentre_grouped),
]
