import React from "react"
import styles from "./Tech.module.css"
import Image from "next/image"

interface Props {
  name: string
  icon: string
}

export default function Tech({ name, icon }: Props) {
  return (
    <div className={styles.container} title={name}>
      {name}
      <Image src={icon} fill alt={name} />
    </div>
  )
}
