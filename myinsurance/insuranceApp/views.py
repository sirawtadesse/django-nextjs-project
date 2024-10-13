from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import insuranceAppProposal
from .serializers import insuranceAppProposalSerializer
from .models import Claim, BlogPost
from .serializers import ClaimSerializer
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@api_view(['POST'])
def insurance_app_proposal_create(request):
    if request.method == 'POST':
        serializer = insuranceAppProposalSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def proposal_list(request):
    proposals = insuranceAppProposal.objects.all()
    return render(request, 'insuranceApp/proposal_list.html', {'proposals': proposals})


@api_view(['POST'])
def claim_create(request):
    if request.method == 'POST':
        serializer = ClaimSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def claim_list(request):
    claims = Claim.objects.all()
    return render(request, 'insuranceApp/claim_list.html', {'claims': claims})

# views.py


@csrf_exempt
def register(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("email")  # Using email as username
        password = data.get("password")
        name = data.get("name")

        if User.objects.filter(username=username).exists():
            return JsonResponse({"error": "User already exists"}, status=400)

        try:
            user = User.objects.create_user(username=username, password=password, first_name=name)
            return JsonResponse({"message": "User registered successfully"}, status=201)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        username = data.get("email")
        password = data.get("password")

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse({"message": "User logged in successfully"}, status=200)
        else:
            return JsonResponse({"error": "Invalid credentials"}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)

def user_list(request):
    if request.method == "GET":
        users = User.objects.all().values("id", "username", "first_name")
        return JsonResponse(list(users), safe=False)

def blog_posts(request):
    if request.method == 'GET':
        posts = BlogPost.objects.all().values('id', 'title', 'content', 'image', 'created_at')
        return JsonResponse(list(posts), safe=False)
    return JsonResponse({"error": "Method not allowed"}, status=405)