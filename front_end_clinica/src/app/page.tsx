import NavBar from '@/components/NavBar'
import SectioWelcome from '@/components/SectionWelcome'
import SectionServico from '@/components/sectionServico'
import Footer from '@/components/Footer'

import styles from './page.module.css'

import { get_consultas } from '@/servers/api'

export default async function Home() {

  const consultas = await get_consultas()

  return (
    <>
      <NavBar />
      <main className={ styles.containerMain }>
        <div>
          <h1>Clean Odonto</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo assumenda distinctio! Eius sit fuga illo est libero cum. Voluptate, vel dolore facilis minus temporibus impedit dicta quas maxime numquam.</p>
        </div>
      </main>

      <SectioWelcome />
      <SectionServico consulta={ consultas } />
      <Footer />
    </>
  )
}