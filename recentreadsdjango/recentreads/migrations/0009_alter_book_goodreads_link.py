# Generated by Django 5.0.7 on 2024-07-17 02:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recentreads', '0008_book_goodreads_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='goodreads_link',
            field=models.CharField(max_length=200),
        ),
    ]
