from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from marca_consulta.models import Consultas
from marca_consulta.serializers import ConsultasSerializeres

# GET CONSULTAS
@api_view(['GET'])
def get_consulta(request):
    if request.method == 'GET':
        consutas = Consultas.objects.all()
        serializer_consultas = ConsultasSerializeres(consutas, many=True)
        return Response(serializer_consultas.data, status=status.HTTP_200_OK)
    
    return Response(status=status.HTTP_400_BAD_REQUEST)

# GET PACIENTES POR ID
@api_view(['GET'])
def get_consulta_id(request, id):
   try:
       consulta = Consultas.objects.get(pk=id)
   except:
       return Response(status=status.HTTP_404_NOT_FOUND)
   
   if request.method == 'GET':
       serializer_consulta = ConsultasSerializeres(consulta)
       return Response(serializer_consulta.data, status=status.HTTP_200_OK)

# POST NEW CONSULTA 
@api_view(['POST'])
def post__consulta(request):
    if request.method == 'POST':
        new_consulta = request.data
        serializer_consultas = ConsultasSerializeres(data=new_consulta)

        if serializer_consultas.is_valid():
            serializer_consultas.save()
            return Response(serializer_consultas.data, status=status.HTTP_201_CREATED)
    
    return Response(status=status.HTTP_400_BAD_REQUEST)

# DELETA CONSULTA
@api_view(['DELETE'])
def delete_consulta(request):
    if request.method == 'DELETE':
        try:
            delete_consulta = Consultas.objects.get(pk=request.data['id_consulta'])
            delete_consulta.delete()
            return Response(status=status.HTTP_202_ACCEPTED)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)