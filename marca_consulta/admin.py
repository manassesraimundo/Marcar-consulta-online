from django.contrib import admin
from .models import MarcarConsulta, Consultas, InformacaoClinica

# Register your models here.
admin.site.register(MarcarConsulta)
admin.site.register(Consultas)
admin.site.register(InformacaoClinica)
