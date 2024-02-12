"use client"

import React from "react"
import styles from "./Header.module.css"
import Button from "../Button/Button"
import Image from "next/image"
import { goto } from "@/utils/goto"

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src={"beta.svg"} fill alt="" />
        </div>
      </div>
      <div className={styles.right}>
        {/* <Button kind="secondary">Connect Wallet</Button> */}
        <Button kind="primary" onClick={() => goto("contact")}>
          Get in touch
        </Button>
      </div>
    </header>
  )
}
