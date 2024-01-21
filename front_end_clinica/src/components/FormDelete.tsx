'use client'

import { useEffect, useState } from 'react';
import { get_consultas_marcadas } from '@/servers/api';

import ModalCancelarConsulta from './ModalCancelarConsulta';

import styles from '../styles/formDelete.module.css';

export default function FormDelete() {

    const [nome, setNome] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [lista, setLista] = useState<any>([])

    useEffect(() => {
        async function deletar() 
        {
            const res = await get_consultas_marcadas()
            setLista(res)
        }

        deletar()

    }, [nome, telefone])

    return (
        <form className={ styles.containerCancelarConsulta }>
            <div className={ styles.containerInput }>
                <div>
                    <label htmlFor="">Nome*</label>
                    <input
                        type="text"
                        placeholder="Manassés Raimundo"
                        required
                        value={ nome }
                        onChange={ (e: any) => setNome(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="">Telefone*</label>
                    <input
                        type="number"
                        placeholder="99999999"
                        required
                        value={ telefone }
                        onChange={ (e: any) => setTelefone(e.target.value) }
                    />
                </div>
            </div>
            <div>
                <ModalCancelarConsulta nome={nome} telefone={telefone} lista={lista}/>
            </div>
        </form>
    )
}