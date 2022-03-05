from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from bson import json_util
from .db import collections
class TodoListView(APIView):

    def get(self, request):
        # Implement this method - return all todo items from db instance above.
        List=collections.find({})
        data=json.loads(json_util.dumps(List))
        return Response(data, status=status.HTTP_200_OK)
        
    def post(self, request):
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        name=request.data
        collections.insert_one(name)
        return Response(request.data, status=status.HTTP_200_OK)

