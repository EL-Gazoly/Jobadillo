from django.shortcuts import render
from django.http import HttpResponse


posts = [
    {
        'company' : 'Facebook',
        'title' : 'Software Engineer',
        'content': 'First Post',
        'Created_At': 'Augest 2, 2022'
    },
    {
        'company' : 'Microsoft',
        'title' : 'Data Science',
        'content': 'Second Post',
        'Created_At': 'Augest 2, 2022'
    },
    {
        'company' : 'Ubisoft',
        'title' : 'Gamer',
        'content': 'Third Post',
        'Created_At': 'Augest 2, 2022'
    }
]

# Create your views here.
def home(request):
    context = {
        'posts': posts
    }
    return render(request, 'jobs/home.html', context)