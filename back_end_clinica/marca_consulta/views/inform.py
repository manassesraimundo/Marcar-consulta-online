from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from marca_consulta.models import InformacaoClinica
from marca_consulta.serializers import InformacaoClinicaSerializer

# GET INFORMACAO DA CLINICA
@api_view(['GET'])
def get_informacao_clinica(request):
    if request.method == 'GET':
        info_clinica = InformacaoClinica.objects.all()
        serializer_info = InformacaoClinicaSerializer(info_clinica, many=True)
        return Response(serializer_info.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)

# POST INFORMACAO DA CLINICA
@api_view(['POST'])
def post_info_clinica(request):
    if request.method == 'POST':
        new_endereco = request.data
        serializer_info_clinica = InformacaoClinicaSerializer(data=new_endereco)

        if serializer_info_clinica.is_valid():
            serializer_info_clinica.save()
            return Response(serializer_info_clinica.data, status=status.HTTP_201_CREATED)

    return Response(status=status.HTTP_400_BAD_REQUEST)

# PUT INFORMACAO DA CLINICA
@api_view(['PUT'])
def put_info_clinica(request):
    if request.method == 'PUT':
        info = request.data['id_info']
        try:
            editar_info = InformacaoClinica.objects.get(pk=info)
        except:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer_info_clinica = InformacaoClinicaSerializer(editar_info, data=request.data)
        if serializer_info_clinica.is_valid():
            serializer_info_clinica.save()
            return Response(serializer_info_clinica.data, status=status.HTTP_202_ACCEPTED)
    
    return Response(status=status.HTTP_400_BAD_REQUEST)

# DELETE INFOR. CLINICA
@api_view(['DELETE'])
def delete_info_clinica(request):
    if request.method == 'DELETE':
        try:
            delete_info_clinica = InformacaoClinica.objects.get(pk=request.data['id_info'])
            delete_info_clinica.delete()
            return Response(status=status.HTTP_202_ACCEPTED)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST)