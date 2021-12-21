from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from QnA.model_data import DbUploader
from QnA.models import QnA
from QnA.serializers import QnASerializer
from user.models import User


@api_view(['GET','POST','PUT', 'DELETE'])
@parser_classes([JSONParser])
def board(request):
    try:
        if request.method == 'POST':
            new = request.data
            u = User()
            user = User.objects.all().filter(id=new['writen']).values()[0]
            u.id = user['id']
            QnA.objects.create(title=new['title'],
                                 body=new['body'],
                                 writer=u,
                                 review=new['review'],
                                 update_at=new['update_at'])
            return JsonResponse({'게시판': '등록 완료'})
        elif request.method == 'GET':
            boardlist = QnA.objects.all()
            serializer = QnASerializer(boardlist, many=True)
            return JsonResponse(data=serializer.data, safe=False)
        elif request.method == 'PUT':
            modifyboard = request.data
            u = User()
            user = User.objects.all().filter(id= modifyboard['writen']).values()[0]
            u.id = user['id']
            board = QnA.objects.get(id=modifyboard['id'])
            dbboard = QnA.objects.all().filter(id=modifyboard['id']).values()[0]
            dbboard['title'] = modifyboard['title']
            dbboard['body'] = modifyboard['body']
            dbboard['writer'] = u.id
            dbboard['review'] = modifyboard['review']
            dbboard['update_at'] = modifyboard['update_at']
            serializer = QnASerializer(data=dbboard)
            serializer.update(board, dbboard)
            return JsonResponse({'board modify': 'SUCCESS'})
        elif request.method == 'DELETE':
            dbboard = QnA.objects.get(id=request.data['id'])
            dbboard.delete()
            return JsonResponse({'board delete': 'SUCCESS'})
    except:
        return JsonResponse({'board': 'fail'})


@api_view(['GET'])
def find(request):
    try:
        findQnA = request.data
        dbQnA = QnA.objects.all().filter(id=findQnA['id']).values()[0]
        return JsonResponse(data=dbQnA, safe=False)
    except:
        return JsonResponse({'find': 'fail'})


@api_view(['GET'])
@parser_classes([JSONParser])
def upload(request):
    print('######## 1 ########')
    DbUploader().insert_data()
    return JsonResponse({'Product Upload': 'SUCCEESS'})

# Create your views here.
