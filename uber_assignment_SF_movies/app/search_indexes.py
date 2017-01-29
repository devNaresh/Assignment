from haystack import indexes
from models import Movie


class MovieIndex(indexes.SearchIndex, indexes.Indexable):
    text = indexes.CharField(document=True, use_template=True)
    year = indexes.CharField(model_attr='year')

    content_auto = indexes.EdgeNgramField(model_attr='title')

    def get_model(self):
        return Movie

    def index_queryset(self, using=None):
        """Used when the entire index for model is updated."""
        return self.get_model().objects.all()