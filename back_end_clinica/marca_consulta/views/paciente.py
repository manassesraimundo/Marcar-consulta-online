from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from marca_consulta.models import MarcarConsulta
from marca_consulta.serializers import MarcarConsultaSerializer

# GET PACIENTES POR MEIDO DO NOME
@api_view(['GET'])
def get_paciente_especifico(request, nome_paciente):
   try:
       pacient = MarcarConsulta.objects.filter(nome_paciente__icontains=nome_paciente)
   except:
       return Response(status=status.HTTP_404_NOT_FOUND)
   
   if request.method == 'GET':
       serializer_consulta = MarcarConsultaSerializer(pacient, many=True)
       return Response(serializer_consulta.data, status=status.HTTP_200_OK)

# GET PACIENTES POR ID
@api_view(['GET'])
def get_paciente_por_id(request, id):
   try:
       pacient = MarcarConsulta.objects.get(pk=id)
   except:
       return Response(status=status.HTTP_404_NOT_FOUND)
   
   if request.method == 'GET':
       serializer_consulta = MarcarConsultaSerializer(pacient)
       return Response(serializer_consulta.data, status=status.HTTP_200_OK)