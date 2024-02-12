"use client"
import React from "react"
import styles from "./Hero.module.css"
import Button from "../Button/Button"
import PreviousCompanies from "../PreviousCompanies/PreviousCompanies"
import PreviousCompany from "../PreviousCompanies/PreviousCompany/PreviousCompany"
import { goto } from "@/utils/goto"
export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>Bombadil</h1>
      <sub className={styles.job_title}>Software Engineer</sub>
      <div className={styles.description}>I make high-quality web applications. Let&apos;s build the future together.</div>
      <Button kind="primary" onClick={() => goto("contact")}>
        Get in touch
      </Button>

      <div className={styles.dots} />
      <div className={styles.dots_glow} />
    </div>
  )
}
