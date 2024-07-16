from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)

    def __str__(self):
        return self.first_name + " " + self.last_name

class Book(models.Model):
    STATUS_CHOICES = {
        "TBR": "To Be Read",
        "C": "Currently Reading",
        "F": "Finished",
    }

    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    genre = models.CharField(max_length=50)
    status = models.CharField(max_length=3, choices=STATUS_CHOICES)
    review = models.TextField()
    rating = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title
    