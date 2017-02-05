from django.contrib import admin
from app.models import Movie
# Register your models here.


class MovieAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'longitude', 'latitude']

admin.site.register(Movie, MovieAdmin)