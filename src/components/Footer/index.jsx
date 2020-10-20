import React from "react"
import styles from "./styles.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </p>
    </footer>
  )
}

export default Footer
