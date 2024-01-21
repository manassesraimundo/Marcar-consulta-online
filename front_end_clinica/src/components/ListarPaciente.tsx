'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation'
import ModalCancelarConsulta from './ModalCancelarConsulta';

interface ListaPaciente {
    lista: any[],
}

export default function ListarPaciente(props: ListaPaciente) {

    const navigate = useRouter()

    return (
        <div className='container mt-4'>
            <div className=''>
                <div>
                    <h2 className='h2'>Listar dos pacientes</h2>
                </div>
                <div className='mb-4 mr-3 bg-light-subtle p-1 gap-3 d-flex justify-content-end'>
                    <input type="text" name="text" id="text" placeholder='Buscar' className='form-control' style={{ width: 300 }} />
                    <button className='btn btn-primary'>Pesquizar</button>
                </div>
            </div>
            <div style={{ maxHeight: 500, width: '100%', overflow: 'auto', borderCollapse: 'separate' }}>
                <table className="table table-striped table-bordered container-XXL">
                    <thead className='table-dark' style={{ position: 'sticky', top: 0 }}>
                        <tr>
                            {/* <th scope="col">ID</th> */}
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            {/* <th scope="col">E-mail</th> */}
                            <th scope="col">Consulta</th>
                            <th scope="col">Data da consulta</th>
                            <th scope="col">Preço da consulta</th>
                            <th scope="col">Ver detalhe / deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.lista.map((paciente: any) => (
                            <tr key={paciente.id}>
                                {/* <th scope="row">{paciente.id}</th> */}
                                <td>{paciente.nome_paciente}</td>
                                <td>{paciente.telefone}</td>
                                {/* <td style={{maxWidth: 300, overflow: 'auto' }}>{paciente.email == '' ? '------' : paciente.email}</td> */}
                                <td>{paciente.consulta.nome_consulta}</td>
                                <td style={{ maxWidth: 200, overflow: 'auto', borderCollapse: 'collapse' }}>{paciente.data_marcar_consulta}</td>
                                <td>{paciente.consulta.preco_consulta}kz</td>

                                <td style={{ display: 'flex', gap: 6 }}>
                                    <button type="button" className="btn btn-primary" onClick={() => navigate.push(`/admin-clinica/detalhes/${paciente.id}`)}>Detalhes</button>
                                    <button type="button" className="btn btn-danger">Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}