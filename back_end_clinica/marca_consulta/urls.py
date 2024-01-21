from django.urls import path
from .views import *

urlpatterns = [
    path('', get_consultas_marcada, name='home'),
    path('marcar_consulta/', post_marcar_consulta, name='marcar_cosulta'),
    path('marcar_consulta/editar_marcar_consulta/', put_consulta_marcada, name='editar_marcar_cosulta'),
    path('marcar_consulta/deletar_consulta_marcada/<str:nome_paciente>/<str:telefone>', delete_consulta_marcada, name='deletar_consulta_marcada'),

    path('pacientes/<str:nome_paciente>', get_paciente_especifico, name='pacientes_especifo'),
    path('id_pacient/<int:id>', get_paciente_por_id, name='pacientes_especifo_id'),

    path('consultas/', get_consulta, name='cosultas'),
    path('consultas/nova_consulta/', post__consulta, name='nova_consulta'),
    path('consultas/deletar_consulta/', delete_consulta, name='id_pacient'),
    path('consulta_id/<int:id>', get_consulta_id, name='consulta_id'),

    path('info_clinica/', get_informacao_clinica, name='info_clinica'),
    path('info_clinica/novo_endereco/', post_info_clinica, name='novo_endereco'),
    path('info_clinica/editar_info_clinica/', put_info_clinica, name='editar_info_clinica'),
    path('info_clinica/deletar_info_clinica/', delete_info_clinica, name='deletar_info_clinica'),
]