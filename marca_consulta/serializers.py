from rest_framework import serializers

from .models import *

class ConsultasSerializeres(serializers.ModelSerializer):
    class Meta:
        model = Consultas
        fields = '__all__'

class MarcarConsultaSerializer(serializers.ModelSerializer):
    consulta = ConsultasSerializeres()

    class Meta:
        model = MarcarConsulta
        fields = ('id', 'nome_paciente', 'telefone', 'email', 'data_marcada', 'data_marcar_consulta', 'consulta')

    def create(self, validated_data):
        consulta_data = validated_data.pop('consulta')
        consulta_instance = Consultas.objects.create(**consulta_data)
        marcar_consulta_instance = MarcarConsulta.objects.create(consulta=consulta_instance, **validated_data)
        return marcar_consulta_instance

class InformacaoClinicaSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformacaoClinica
        fields = '__all__' 
