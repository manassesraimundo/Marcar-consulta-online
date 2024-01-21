'use client'

import styles from '@/styles/navBar.module.css'
import { Link, ButtonBase } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function AdminNav() {

    const navigation = useRouter()
    
    return (
        <div className={styles.containerNavBar} style={{width: '100%', backgroundColor: '#b4acac', color: '#fff' }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <p>Vder site</p>
            </div>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <ButtonBase onClick={() => navigation.push('/admin-clinica')}>
                            <Link>Lista dos Paciente</Link>
                        </ButtonBase>
                    </li>
                    <li>
                        <ButtonBase>
                            <Link>Listar funcionario</Link>
                        </ButtonBase>
                    </li>
                    <li>
                        <ButtonBase>
                            <Link>Cadastrar funcionario</Link>
                        </ButtonBase>
                    </li>
                </ul>
            </nav>
        </div>
    )
}