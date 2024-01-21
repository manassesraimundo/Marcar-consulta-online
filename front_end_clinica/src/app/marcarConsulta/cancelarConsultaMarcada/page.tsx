import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import FormDelete from "@/components/FormDelete"

import styles from '../../../styles/cancelarConsultaMarcada.module.css'

export default async function CancelarConsultaMarcada() {

    return (
        <>
            <NavBar />
            <div className={styles.containerCancelar}>
                <div className={styles.infoCancelarConsulta}>
                    <h2>Cancelar Consulta Marcada</h2>
                    <p>Para Cancelar a sua consulta que já esta marcada, basta introduzir os seguintes dados:</p>
                    <ul> 
                        <li>O seu nome que cadastrate para a consulta</li>
                        <li>O seu número de telefone</li>
                    </ul>
                </div>
                <FormDelete />
            </div>

            <Footer />
        </>
    )
}
