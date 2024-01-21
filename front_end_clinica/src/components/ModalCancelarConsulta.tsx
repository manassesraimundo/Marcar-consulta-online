'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonBase } from '@mui/material';

import styles from '@/styles/formDelete.module.css'

import { delete_consulta } from '@/servers/api';
import { useRouter } from 'next/navigation';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 560,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface PropsBasicModal {
    nome: string,
    telefone: string,
    lista: any[]
}

export default function ModalCancelarConsulta(props: PropsBasicModal) {

    const navigation = useRouter()

    const [open, setOpen] = React.useState(false);
    const fechar = () => setOpen(false)

    const handleOpen = () => {
        if (props.nome !== '' && props.telefone !== '') {
            setOpen(true)
        }
        else {
            alert('Preenche os campos.')
        }
    }

    async function deletar() {
        if (props.lista.some((element: any) => element.nome_paciente === props.nome && element.telefone === props.telefone)) {
            await delete_consulta(props.nome, props.telefone)
            setOpen(false)
        }
        else {
            alert('Dados não encontrado.')
        }
    }

    return (
        <div>
            <ButtonBase className={styles.buttonCancela} onClick={handleOpen}>Cancelar consulta</ButtonBase>
            <Modal
                open={open}
                // onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h6">Cancelar consulta</Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>{props.nome}</Typography>
                    <Typography id="modal-modal-description">{props.telefone}</Typography>
                    <Typography id="modal-modal-description" sx={{ mb: 2 }}>Desejas cancelar a sua consulta?</Typography>

                    <div style={{ display: 'flex', gap: 10, justifyContent: 'end' }}>
                        <ButtonBase className={styles.bottonOk} onClick={fechar}>Não</ButtonBase>
                        <ButtonBase className={styles.bottonCancelar} onClick={deletar}>Sim</ButtonBase>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}