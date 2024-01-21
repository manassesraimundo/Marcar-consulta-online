'use client'

import 'bootstrap/dist/css/bootstrap.min.css';

import { get_consultas_id } from '@/servers/api';
import { useEffect, useState } from 'react';
import { ButtonBase } from '@mui/material';

export default function IdPaciente({ params }: {
    params: { idpaciente: number }
}) {

    const [get, setGet] = useState<any>({})
    const [consul, setConsul] = useState<any>()

    useEffect(() => {
        async function pegarPaciente() 
        {
            const paciente = await get_consultas_id(params.idpaciente)
            setGet(paciente)
            setConsul(paciente.consulta.nome_consulta)
        }

        pegarPaciente()

    }, [])

    return (
        <div className='container mt-5'>
            <div className='mt-5'>
                <h2 className='h2'>Dados do paciente</h2>
            </div>
            <div className='mt-5' style={{ display: 'flex', width: '100%', height: '100%' }}>
                <div style={{ width: 400, borderRight: '1px solid #000', padding: 8, height: 370 }}>
                    <p><strong>Id</strong>: {params.idpaciente}</p>
                    <p><strong>Nome</strong>: {get.nome_paciente}</p>
                    <p><strong>Telefone</strong>: {get.telefone}</p>
                    <p><strong>E-mail</strong>: {get.email}</p>
                    <p><strong>Consulta</strong>: {consul}</p>
                    <p><strong>Marcada</strong>: {get.data_marcada}</p>
                    <p><strong>Para</strong>: {get.data_marcar_consulta}</p>
                </div>
                <div className='m-5' style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <h3>Enviar Mensagem</h3>
                    <div>
                        <input type="text" className='form-control ' placeholder='Assunto' />
                    </div>
                    <textarea name="text" className='form-control' cols={20} rows={20} placeholder='Escreve a mensagem' style={{ height: 100, padding: 8, fontSize: 16, width: 500 }}></textarea>
                    <div>
                        <ButtonBase className='btn btn-primary' onClick={() => alert('Testando')}>Enviar</ButtonBase>
                    </div>
                </div>
            </div>
        </div>
    )
}