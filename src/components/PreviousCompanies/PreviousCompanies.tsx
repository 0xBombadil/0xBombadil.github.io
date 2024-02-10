import React, { ReactNode } from "react"
import styles from "./PreviousCompanies.module.css"

interface Props {
  children: ReactNode
}

export default function PreviousCompanies({ children }: Props) {
  return (
    <div className={styles.container}>
      <h2>Worked with</h2>
      <div className={styles.companies}>{children}</div>
    </div>
  )
}
