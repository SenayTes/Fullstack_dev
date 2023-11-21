from django.shortcuts import render, HttpResponse
from .models import Member

# Create your views here.
def base(request):
    return render(request, "base.html")

def members(request):
    mem = Member.objects.all()
    return render(request, "members.html", {"members": mem})

def menu(request):
    return render(request, "menu.html")
