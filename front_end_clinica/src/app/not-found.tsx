'use client'

import { useRouter } from "next/navigation"
import { ButtonBase } from "@mui/material"

import styles from '@/styles/notFound.module.css'
 
export default function NotFound() {

  const navigate = useRouter()

  return (
    <div className={styles.containerNotFound}>
      <h2>404</h2>
      <p>Página não encontrada</p>
      <ButtonBase onClick={() => navigate.push('/')}>Volta para a Home</ButtonBase>
    </div>
  )
}