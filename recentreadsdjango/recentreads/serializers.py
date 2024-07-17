from rest_framework import serializers
from .models import Author, Book

# serializer for all fields of book objects
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

# serializer for all fields of author objects
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'