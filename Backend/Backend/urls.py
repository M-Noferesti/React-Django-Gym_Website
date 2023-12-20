from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls.static import static
from django.conf import settings
from enrolment.views import SubmitRequestedClassesEndpoint,SyncUserRequests,UserEnrollmentHistory

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/classes/', include('classes.urls')),
    path('api/accounts/', include('accounts.urls')),
    path('api/coaches/', include('coaches.urls')),
    path('api/gallery/', include('gallery.urls')),
    path('api/achievements/', include('achievements.urls')),
    path('api/contact/', include('contact.urls')),    
    path('api/submit_requests/',SubmitRequestedClassesEndpoint.as_view(), name='submit_requests'),
    path('api/sync_user_requests/',SyncUserRequests.as_view(), name='sync_user_requests'),
    path('api/user_enrollment_history/',UserEnrollmentHistory.as_view(), name='sync_user_requests'),
    path('api/attending_classes_requests/', include('enrolment.attending_classes_urls')),
    path('api/online_classes_requests/', include('enrolment.online_classes_urls')),
    path('',TemplateView.as_view(template_name='index.html')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
