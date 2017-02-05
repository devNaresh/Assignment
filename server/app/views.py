from django.shortcuts import render

# Create your views here.
import json
from django.http import HttpResponse, Http404, JsonResponse
from haystack.query import SearchQuerySet


def autocomplete(request):
    search_query = request.GET.get("q", None)
    if not search_query:
        raise Http404
    autosuggest = SearchQuerySet().autocomplete(content_auto=search_query)[:5]
    try:
        autosuggest_results = map(lambda x: dict(title=x.object.title, lat=x.object.latitude, log=x.object.longitude), autosuggest)
        response = {"results": autosuggest_results}
        return JsonResponse(response)
    except Exception:
        raise Http404()


def home(request):
    return render(request, 'index.html')