from django.urls import path
from enrolment.views import *
app_name = 'requsets'

urlpatterns = [
    path('update',RequestedAttendingClassesEndpoint.as_view(), name='attending_classes-requests'),
    path('update/<int:id>',RequestedAttendingClassEndpoint.as_view(), name='attending_class-request'),
    path('enrolled',EnrolledAttendingClassesEndpoint.as_view(), name='attending_classes-enrolled'),
    path('renewal/<int:id>',RenewalAttendingClass.as_view(), name='renewal_attending_classes'),
    
]