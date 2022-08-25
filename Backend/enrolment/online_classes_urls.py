from django.urls import path
from enrolment.online_classes_views import *
app_name = 'requsets'

urlpatterns = [
    path('update',RequestedOnlineClassesEndpoint.as_view(), name='online_classes-requests'),
    path('update/<int:id>',RequestedOnlineClassEndpoint.as_view(), name='online_class-request'),
    path('enrolled',EnrolledOnlineClassesEndpoint.as_view(), name='online_classes-enrolled'),
    path('renewal/<int:id>',RenewalOnlineClass.as_view(), name='renewal_online_classes'),

]