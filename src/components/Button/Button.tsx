"use client"
import React from "react"
import styles from "./Button.module.css"

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  kind: "primary" | "secondary"
}

export default function Button({ ...props }: Props) {
  return (
    <button className={`${styles.container} ${styles[props.kind]}`} {...props}>
      {props.children}
    </button>
  )
}
