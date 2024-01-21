import Link from "next/link";

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer";
import Form from "@/components/Form";

import { get_consultas, get_consultas_marcadas } from "@/servers/api";

import styles from '../../styles/marcarConsulta.module.css';

export default async function MarcarConsulta() {

    const consulta = await get_consultas()
    
    const consultas_marcadas = await get_consultas_marcadas()

    return (
        <>
            <NavBar />
            <section className={ styles.containerMarcarConsulta }>
                <div className={ styles.linkCancelarConsulta }>
                    <Link href={'/marcarConsulta/cancelarConsultaMarcada'}>Cancelar Consulta Marcada</Link>
                </div>

                <Form consultas={ consulta } consultas_marcadas={ consultas_marcadas } />

            </section>

            <Footer />
        </>
    )
}