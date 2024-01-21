'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonBase } from '@mui/material';

import { get_consultas_marcadas, new_consulta } from '@/servers/api';
import { useRouter } from 'next/navigation';

import styles from '@/styles/bottonModal.module.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface PropsBasicModal {
    nome: string,
    telefone: string,
    email: string,
    consulta: any,
    dataConsulta: any,
    hora: string,
    lista: any[],
    nome_consulta: any
}

export default function BasicModal(props: PropsBasicModal) {

    const navigation = useRouter()

    const [open, setOpen] = React.useState(false);

    const fechar = () => setOpen(false)
    const handleOpen = () => {
        if (props.nome && props.telefone && props.dataConsulta && props.consulta && props.hora !== '')
            setOpen(true)
        else
            alert('Peencher os campos obrigatorios.')
    }

    const navegar = () => {
        navigation.push('/')
    }

    async function marcarConsulta(hora: string, evt: any) {
        const f: [] = await get_consultas_marcadas()
        let data = `${props.dataConsulta} as ${hora}`

        if (f.some((element: any) => element.data_marcar_consulta === data)) {
            alert(`A data ${props.dataConsulta} as ${props.hora} já está oucupada.\nPor favor selecione uma outra data para a sua consulta.\n\nCLEAN ODONTO`)
            evt.preventDefault()
            return
        }
        else {
            new_consulta(props.nome, props.telefone, props.email, data, props.lista)
            setOpen(false)
            navegar()
        }
    }

    const handleSubmit = async (evt: any) => {
        if (props.nome && props.telefone && props.consulta && props.hora !== '' && props.dataConsulta !== null) {
            await marcarConsulta(props.hora, evt)
        }
        else {
            evt.preventDefault()
            alert('Preencha os campos Nome* Telefone* Consulta* Dia* Mês* Ano* e Hora*! E-mail é um campo opcional.')
        }
    }

    return (
        <div>
            <ButtonBase onClick={handleOpen}>Marca consulta</ButtonBase>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h6">Confirma os dados</Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}><strong>Nome:</strong> {props.nome}</Typography>
                    <Typography id="modal-modal-description"><strong>Telefone:</strong> {props.telefone}</Typography>
                    <Typography id="modal-modal-description"><strong>E-mail:</strong> {props.email}</Typography>
                    <Typography id="modal-modal-description"><strong>Consulta:</strong> {props.nome_consulta}</Typography>
                    <Typography id="modal-modal-description" sx={{ mb: 2 }}>
                        <strong>Data da consulta:</strong> {props.dataConsulta != '' && props.hora != '' ? `${props.dataConsulta} as ${props.hora}` : ''}
                    </Typography>

                    <div style={{ display: 'flex', gap: 10, justifyContent: 'end' }}>
                        <ButtonBase className={styles.bottonMarcar} onClick={handleSubmit}>Marcar</ButtonBase>
                        <ButtonBase className={styles.bottonCancelar} onClick={fechar}>Cancelar</ButtonBase>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}