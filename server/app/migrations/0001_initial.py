# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=250)),
                ('year', models.CharField(max_length=250)),
                ('location', models.CharField(max_length=250)),
                ('fun_fact', models.CharField(max_length=250, null=True)),
                ('production_company', models.CharField(max_length=250)),
                ('director', models.CharField(max_length=250)),
                ('actor1', models.CharField(max_length=250)),
                ('actor2', models.CharField(max_length=250, null=True)),
                ('actor3', models.CharField(max_length=250, null=True)),
                ('longitude', models.DecimalField(max_digits=9, decimal_places=6)),
                ('latitude', models.DecimalField(max_digits=9, decimal_places=6)),
            ],
        ),
    ]
