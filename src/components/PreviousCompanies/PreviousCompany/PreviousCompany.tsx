import Image from "next/image"
import React from "react"
import styles from "./PreviousCompany.module.css"

interface Props {
  name: string
  icon: string
}

export default function PreviousCompany({ name, icon }: Props) {
  return (
    <div className={styles.container}>
      <Image src={icon} fill alt={name} title={name} />
    </div>
  )
}
