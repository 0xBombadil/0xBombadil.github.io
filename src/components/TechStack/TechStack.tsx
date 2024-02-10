import React, { ReactNode } from "react"
import styles from "./TechStack.module.css"

interface Props {
  children: ReactNode
}

export default function TechStack({ children }: Props) {
  return (
    <div className={styles.container}>
      <h2>Tech Stack</h2>
      <div className={styles.techs}>{children}</div>
    </div>
  )
}
