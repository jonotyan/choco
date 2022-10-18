from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from .models import Book

def my_api_view(request):
    data = {
        'user_id': 0,
        'name': request.user.username,  # username of current logged-in user, otherwise Anonymous
        'username': 'https://www.pyscoop.com/',
        'email': 'email@gmail.com',
        'website': 'website',
    }
    return JsonResponse(data)
  
class BookView(View):
    def get(self, request):
        books_count = Book.objects.count()  # TOTAL books in the database
        books = Book.objects.all()  # Get all book objects from the database

        books_serialized_data = []  # to store serialized data
        for book in books:
            books_serialized_data.append({
                'book_title': book.title,
                'author_name': book.author,
                'book_price': book.price,
            })

        data = {
            'books': books_serialized_data,
            'count': books_count,
        }
        return JsonResponse(data)
# Create your views here.
