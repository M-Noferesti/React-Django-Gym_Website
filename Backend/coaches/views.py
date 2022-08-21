from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.mixins import CreateModelMixin, UpdateModelMixin, DestroyModelMixin
from rest_framework.authentication import TokenAuthentication
from utils.permissions import IsAdminOrReadOnly
from coaches.serializer import CoachSerializer
from coaches.models import Coach
from rest_framework.response import Response
from rest_framework.decorators import api_view
from utils.pagination import Pagination


PAGE_SIZE = 4

class CoachesListAPIView(ListAPIView, CreateModelMixin):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAdminOrReadOnly]
    queryset = Coach.objects.all()
    serializer_class = CoachSerializer
    pagination = Pagination(PAGE_SIZE)
    pagination_class = pagination

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


@api_view(('GET',))
def pagination(request):
    total_items = Coach.objects.all().count()
    if total_items % PAGE_SIZE != 0 :
            total_pages =  int((total_items/PAGE_SIZE) + 1)
    else:
            total_pages = total_items / PAGE_SIZE
    return Response({'total_pages':total_pages})

