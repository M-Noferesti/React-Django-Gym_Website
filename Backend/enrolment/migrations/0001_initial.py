# Generated by Django 4.0.4 on 2022-06-07 06:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('classes', '0002_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AttendingClassRequested',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('period', models.IntegerField(default=1)),
                ('price', models.IntegerField(default=0)),
                ('the_then_monthly_fee', models.IntegerField(default=0)),
                ('attending_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classes.attendingclass')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='OnlineClassRequested',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('period', models.IntegerField(default=1)),
                ('price', models.IntegerField(default=0)),
                ('the_then_monthly_fee', models.IntegerField(default=0)),
                ('online_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classes.onlineclass')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='RequestedClasses',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('total_price', models.IntegerField(blank=True, default=0, null=True)),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('update_time', models.DateTimeField(auto_now=True)),
                ('paid', models.BooleanField(default=False)),
                ('attending_classes', models.ManyToManyField(blank=True, null=True, to='enrolment.attendingclassrequested')),
                ('online_classes', models.ManyToManyField(blank=True, null=True, to='enrolment.onlineclassrequested')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name_plural': 'enrollments',
            },
        ),
        migrations.CreateModel(
            name='OnlineClassesEnrolled',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('online_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classes.onlineclass')),
            ],
        ),
        migrations.CreateModel(
            name='BaseClassesEnrolled',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('left_days', models.IntegerField(default=0)),
                ('update_time', models.DateTimeField(auto_now=True)),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='AttendingClassesEnrolled',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('attending_class', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='classes.attendingclass')),
            ],
        ),
    ]