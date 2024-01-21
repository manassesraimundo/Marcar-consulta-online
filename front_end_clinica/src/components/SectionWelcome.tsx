'use client'

import { useRouter } from 'next/navigation'
import { ButtonBase } from '@mui/material';
import styles from '../styles/sectionWelcome.module.css';

export default function SectioWelcome() {

    const navigate = useRouter()

    return (
        <section className={ styles.containerSectionWelcome }>
            <div className={ styles.welcomeText }>
                <h2>Seja Bem-vindo a Clínica Clean Odonto</h2>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, tempora necessitatibus numquam saepe excepturi in, fugiat atque aperiam quasi dignissimos quaerat eius ratione ex quam repellat unde alias aliquam dicta?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, tempora necessitatibus numquam saepe excepturi in, fugiat atque aperiam quasi dignissimos quaerat eius ratione ex quam repellat unde alias aliquam dicta?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, tempora necessitatibus numquam saepe excepturi in, fugiat atque aperiam quasi dignissimos quaerat eius ratione ex quam repellat unde alias aliquam dicta?</p>
                </div>
                <div className={ styles.botaoNavigate }>
                    <ButtonBase onClick={ () => navigate.push('/marcarConsulta') }>Marca Consulta</ButtonBase>
                </div>
            </div>
            <div className={ styles.imgContainer }>
                <img src="img/imagem01.png" alt="" />
            </div>
        </section>
    )
}