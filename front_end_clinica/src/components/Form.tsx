'use client'

import { useState, useEffect } from 'react'
import axios from 'axios';

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import BasicModal from './Modal';
import styles from '../styles/form.module.css'

interface FormProps {
    consultas: any[],
    consultas_marcadas: any[]
}

const fiveAM = dayjs().set('hour', 5).startOf('hour');
const nineAM = dayjs().set('hour', 9).startOf('hour');

export default function Form(props: FormProps) {

    const [dataConsulta, setDataCosulta] = useState<Dayjs | null>(null)
    const [hour, setHour] = useState(fiveAM)

    const [nome, setNome] = useState<string>('')
    const [telefone, setTelefone] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [consulta, setConsulta] = useState<any>('')
    const [lista, setLista] = useState<any>([])
    const [nome_consulta, setNome_consulta] = useState<any>()

    useEffect(() => {
        async function get_consulta_id() {
            if (consulta !== '') {
                const res = await axios.get(`http://localhost:8000/api_data/consulta_id/${consulta}`)
                setLista(res.data)
                setNome_consulta(res.data.nome_consulta)
                return res.data
            }
        }

        get_consulta_id()

    }, [consulta])

    const handHour = (hora: any) => {
        const h = hora.format('HH:mm')
        setHour(h)
    }

    return (
        <form className={styles.form}>
            <h2>Marque a sua Consulta</h2>
            <div className={styles.consulta}>
                <div className={styles.divInputs}>
                    <div>
                        <label>Nome*</label>
                        <input
                            type="text"
                            placeholder="Manassés Raimundo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Telefone*</label>
                        <input
                            type="number"
                            placeholder="999999999"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>E-mail</label>
                        <input
                            type="email"
                            placeholder="username@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.consultas}>
                        <p>Consulta*</p>
                        <select value={consulta} onChange={(e) => setConsulta(e.target.value)}>
                            <option></option>
                            {
                                props.consultas.map((consulta: any) => (
                                    <option key={consulta.id_consulta} value={consulta.id_consulta}>{consulta.nome_consulta}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className={styles.divSelect}>
                    <div className={styles.calendario}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateCalendar']}>
                                <DemoItem label="">
                                    <DateCalendar value={dataConsulta} onChange={(newValue: any) => setDataCosulta(newValue)} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <div className={styles.hora}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <DemoItem label="">
                                    <TimePicker
                                        defaultValue={fiveAM}
                                        minTime={nineAM}
                                        value={hour}
                                        onChange={handHour}
                                    />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
            </div>

            <div className={styles.buttonMarcarConsulta}>
                <BasicModal
                    nome={nome}
                    telefone={telefone}
                    email={email}
                    dataConsulta={dataConsulta?.format('dddd, YYYY-MM-DD')}
                    consulta={consulta}
                    hora={hour}
                    lista={lista}
                    nome_consulta={nome_consulta}
                />
            </div>
        </form>
    )
}