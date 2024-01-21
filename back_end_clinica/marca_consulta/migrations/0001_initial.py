# Generated by Django 5.0.1 on 2024-01-16 23:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Consultas',
            fields=[
                ('id_consulta', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('nome_consulta', models.CharField(max_length=150)),
                ('preco_consulta', models.CharField(default='', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='InformacaoClinica',
            fields=[
                ('id_info', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('endereco', models.CharField(max_length=100)),
                ('telefone_clinica', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Meses',
            fields=[
                ('id_mes', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('nome_mes', models.CharField(default='', max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='MarcarConsulta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('nome_paciente', models.CharField(default='', max_length=150)),
                ('telefone', models.CharField(default='', max_length=20)),
                ('email', models.EmailField(blank=True, default='', max_length=254)),
                ('data_marcada', models.DateTimeField(auto_now_add=True)),
                ('data_marcar_consulta', models.CharField(default='', max_length=100)),
                ('consulta', models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='marcarCosulta', to='marca_consulta.consultas')),
            ],
        ),
    ]