from django.db import models

#model for Authors
class Author(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    goodreads_link = models.CharField(max_length=200)

    def __str__(self):
        return self.first_name + " " + self.last_name


#model for Books
class Book(models.Model):
    #set of choices for reading status of book
    STATUS_CHOICES = {
        "TBR": "To Be Read",
        "C": "Currently Reading",
        "F": "Finished",
    }

    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    genre = models.CharField(max_length=50)
    status = models.CharField(max_length=3, choices=STATUS_CHOICES)
    rating = models.IntegerField(null=True, blank=True)
    cover = models.CharField(max_length=200)
    goodreads_link = models.CharField(max_length=200)

    def __str__(self):
        return self.title
    