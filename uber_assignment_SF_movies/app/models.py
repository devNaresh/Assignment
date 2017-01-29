from __future__ import unicode_literals

from django.db import models


class Movie(models.Model):
    title = models.CharField(max_length=250)
    year = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    fun_fact = models.CharField(max_length=250, null=True)
    production_company = models.CharField(max_length=250)
    director = models.CharField(max_length=250)
    actor1 = models.CharField(max_length=250)
    actor2 = models.CharField(max_length=250, null=True)
    actor3 = models.CharField(max_length=250, null=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    latitude = models.DecimalField(max_digits=9, decimal_places=6)

    # class Meta:
    #     db_table = "sf_movies"

    def __str__(self):
        return self.title
