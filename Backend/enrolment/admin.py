from django.contrib.sessions.models import Session
from django.contrib import admin
from enrolment.models import (RequestedClasses, AttendingClassRequested,
                             OnlineClassRequested, AttendingClassesEnrolled,OnlineClassesEnrolled)


admin.site.register(RequestedClasses)
admin.site.register(AttendingClassRequested)
admin.site.register(OnlineClassRequested)
admin.site.register(AttendingClassesEnrolled)
admin.site.register(OnlineClassesEnrolled)


class SessionAdmin(admin.ModelAdmin):
    def _session_data(self, obj):
        return obj.get_decoded()
    list_display = ['session_key', '_session_data', 'expire_date']


admin.site.register(Session, SessionAdmin)
