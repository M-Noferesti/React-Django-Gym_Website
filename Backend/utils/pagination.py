from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response


class Pagination(PageNumberPagination):

    def __init__(self,page_size): 
        self.page_size = page_size
  
    def get_paginated_response(self, data):
            return Response(data)

    def __call__(self) :
        return self