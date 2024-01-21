from django.db import models

# Create your models here.
class Consultas(models.Model):
    id_consulta = models.AutoField(primary_key=True, auto_created=True, null=False)
    nome_consulta = models.CharField(max_length=150, null=False)
    preco_consulta = models.CharField(max_length=30, null=False, default='')

    def __str__(self):
        return f'{self.nome_consulta}'

class MarcarConsulta(models.Model):
    id = models.AutoField(primary_key=True, auto_created=True, null=False)
    nome_paciente = models.CharField(max_length=150, null=False, default='')
    telefone = models.CharField(max_length=20, null=False, default='')
    email = models.EmailField(blank=True, default='')
    data_marcada = models.DateTimeField(auto_now_add=True)
    data_marcar_consulta = models.CharField(max_length=100, null=False, blank=False, default='')
    consulta = models.ForeignKey(Consultas, on_delete=models.CASCADE, related_name='marcarCosulta', default='')

    def __str__(self):
        return f'{self.id} | {self.nome_paciente} | {self.telefone} | {self.email} |  {self.consulta} | {self.data_marcada} | {self.data_marcar_consulta}'

class InformacaoClinica(models.Model):
    id_info = models.AutoField(primary_key=True, auto_created=True, null=False)
    endereco = models.CharField(max_length=100, blank=False, null=False)
    telefone_clinica = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.id_info} | {self.endereco} | {self.telefone_clinica}'
    