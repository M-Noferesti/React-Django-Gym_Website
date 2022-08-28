from rest_framework.generics import ListAPIView
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.authentication import TokenAuthentication
from utils.permissions import IsAdminOrReadOnly
from gallery.serializer import GallerySerializer,TagSerializer
from gallery.models import GalleryItem,Tag
from utils.pagination import Pagination
from rest_framework.response import Response
from rest_framework.decorators import api_view

PAGE_SIZE = 2

class GalleryListAPIView(ListAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly] 
    serializer_class = GallerySerializer
    gallery_pagination = Pagination(PAGE_SIZE)
    pagination_class = gallery_pagination

    def get_queryset(self):
        queryset = GalleryItem.objects.all()
        tag = self.request.query_params.get('tag')

        if tag is not None and tag != 'all':
            queryset = queryset.filter(tag__tag=tag)

        return queryset
    

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


@api_view(('POST',))
def pagination(request):
    filter = request.data['filter']
    if filter == 'all':
        total_items = GalleryItem.objects.all().count()
    else:
        total_items = GalleryItem.objects.filter(tag__tag=filter).count()
    if total_items % PAGE_SIZE != 0:
            total_pages =  int((total_items/PAGE_SIZE) + 1)

    else :
            total_pages = total_items / PAGE_SIZE

    return Response({'total_pages':total_pages})

class TagsListAPIView(ListAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)