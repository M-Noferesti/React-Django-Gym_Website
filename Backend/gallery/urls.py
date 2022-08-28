from django.urls import path
from gallery.views import GalleryListAPIView,TagsListAPIView,pagination

app_name = 'gallery'

urlpatterns = [
    path('', GalleryListAPIView.as_view(),name='gallery'),
    path('pagination', pagination,name='pagination'),
    path('tags', TagsListAPIView.as_view(),name='tags')
]