import React from "react"
import { Link } from "gatsby"

import logo from "../../images/payments.png"
import styles from "./styles.module.css"
import footerData from "../../data/links.yaml"

const Footer = () => {
  if (!footerData) {
    return null
  }

  return (
    <footer className={styles.footer}>
      <section className={styles.links}>
        <div>
          <h3 className={styles.title}>Documentação</h3>
          <ul>
            {footerData.links.docs.map((link, key) => (
                <li key={`${link.name}-${key}`}>
                  <a href={link.url}>{link.name}</a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>Bibliotecas</h3>
          <ul>
            {footerData.links.libraries.map((link, key) => (
                <li key={`${link.name}-${key}`}>
                  <a href={link.url}>{link.name}</a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>Plugins</h3>
          <ul>
            {footerData.links.plugins.map((link, key) => (
                <li key={`${link.name}-${key}`}>
                  <a href={link.url}>{link.name}</a>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className={styles.title}>Comunidade</h3>
          <ul>
            {footerData.links.community.map((link, key) => (
                <li key={`${link.name}-${key}`}>
                  <a href={link.url}>{link.name}</a>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section className={styles.company}>
        <Link to="/">
          <img src={logo} alt="PaymentsDS logo" />
        </Link>
        <p>PaymentsDS Moçambique © {new Date().getFullYear()}</p>
      </section>
    </footer>
  )
}

export default Footer
