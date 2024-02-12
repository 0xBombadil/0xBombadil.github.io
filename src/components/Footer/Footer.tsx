import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div>© Bombadil {new Date().getFullYear()}</div>

      <div className={styles.links}>
        <a href="https://github.com/0xBombadil" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href="https://twitter.com/0xBombadil" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>
    </footer>
  )
}
