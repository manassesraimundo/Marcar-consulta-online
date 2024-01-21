'use client'

import { useRouter } from "next/navigation"
import { ButtonBase } from "@mui/material"

import styles from '@/styles/pageAbolt.module.css'

export default function AboltClinica() {

    const navigete = useRouter()

    return(
        <div className={styles.containerAbolt}>
            <p>Página em desevolvimento!</p>
            <ButtonBase onClick={ () => navigete.push('/') }>Volta para a Home</ButtonBase>
        </div>
    )
}