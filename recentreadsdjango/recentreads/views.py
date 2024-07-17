from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BookSerializer, AuthorSerializer
from .models import Book, Author

# view for retrieving information about books from the API
class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

# view for retrieving information about authors from the API
class AuthorView(viewsets.ModelViewSet):
    serializer_class = AuthorSerializer
    queryset = Author.objects.all()