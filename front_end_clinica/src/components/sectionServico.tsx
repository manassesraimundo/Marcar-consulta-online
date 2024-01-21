'use client'

import { useRouter } from 'next/navigation'
import { ButtonBase } from '@mui/material'
import styles from '../styles/sectionServicos.module.css'

interface SelectionServicoProps {
    consulta: any[],
}

export default function SectionServico(props: SelectionServicoProps) {

    const navigate = useRouter()
    
    return (
        <section className={ styles.containerSectionServicos }>
            <div className={ styles.imagemBackgraud }>
                <h2>Colhença os nosso Serviços</h2>
            </div>
            <div className={ styles.servicos }>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates inventore harum nostrum adipisci, placeat dolor incidunt dolorem vero, obcaecati similique voluptate, itaque impedit officiis! Fugiat dolorum cupiditate atque doloribus explicabo!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates inventore harum nostrum adipisci, placeat dolor incidunt dolorem vero, obcaecati similique voluptate, itaque impedit officiis! Fugiat dolorum cupiditate atque doloribus explicabo!</p>
            </div>
            <div className={ styles.divPreco }>
                <h3>Tabela de preços</h3>
                <div className={ styles.precos }>
                    {
                        props.consulta.map((consulta) => (
                            <div key={ consulta.id_consulta }>
                                <h5>{ consulta.nome_consulta }</h5>
                                <p>{ consulta.preco_consulta }</p>
                            </div>
                        ))
                    }                   
                </div>
            </div>
            <div className={ styles.containerButon }>
                <ButtonBase onClick={ () => navigate.push('/marcarConsulta') }>Marca a sua Consulta</ButtonBase>
            </div>
        </section>
    )
}