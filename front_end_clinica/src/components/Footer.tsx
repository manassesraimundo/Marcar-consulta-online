import { get_info_footer } from '@/servers/api'

import styles from '../styles/footer.module.css'
import Link from 'next/link'

export default async function Footer() {

    const info_footer = await get_info_footer()

    return(
        <footer className={ styles.containerFooter }>
            <div className={ styles.logoFooter }>
                <Link href={'/'}>CLEAN <span>ODONTO</span></Link>
            </div>
            <div>
                {
                    info_footer.map((info: any) => (
                        <div className={ styles.contatos } key={ info.id_info }>
                            <p>{ info.endereco }</p>
                            <p>{ info.telefone_clinica }</p>
                        </div>
                    ))
                }
            </div>
        </footer>
    )
}