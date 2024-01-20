from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from marca_consulta.models import MarcarConsulta
from marca_consulta.serializers import MarcarConsultaSerializer

# GET EM DODAS AS CONSULTA MARCADA
@api_view(['GET'])
def get_consultas_marcada(request):
    if request.method == 'GET':
        consutas_marcadas = MarcarConsulta.objects.all()
        serializer_consulta = MarcarConsultaSerializer(consutas_marcadas, many=True)
        return Response(serializer_consulta.data, status=status.HTTP_200_OK)
    
    return Response(status=status.HTTP_400_BAD_REQUEST)

# POST NEW MARCAR CONSULTA
@api_view(['POST'])
def post_marcar_consulta(request):
    if request.method == 'POST':
        new_consulta_marcar = request.data
        serializer_consultas_marcada = MarcarConsultaSerializer(data=new_consulta_marcar)

        if serializer_consultas_marcada.is_valid():
            serializer_consultas_marcada.save()
            return Response(serializer_consultas_marcada.data, status=status.HTTP_201_CREATED)
    
    return Response(status=status.HTTP_400_BAD_REQUEST)

# PUT A CONSULTA MARCADA
@api_view(['PUT'])
def put_consulta_marcada(request):
    if request.method == 'PUT':
        consulta = request.data['id']
        try:
            editar_consulta = MarcarConsultaSerializer.objects.get(pk=consulta)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer_consultas = MarcarConsultaSerializer(editar_consulta, data=request.data)
        if serializer_consultas.is_valid():
            serializer_consultas.save()
            return Response(serializer_consultas.data, status=status.HTTP_202_ACCEPTED)
    
    return Response(status=status.HTTP_400_BAD_REQUEST)

# DELETE A CONSULTA MARCADA
@api_view(['DELETE'])
def delete_consulta_marcada(request, nome_paciente, telefone):
    if request.method == 'DELETE':
        try:
            delete_consulta_mar = MarcarConsulta.objects.get(nome_paciente=nome_paciente, telefone=telefone)
            delete_consulta_mar.delete()
            return Response(status=status.HTTP_202_ACCEPTED)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)