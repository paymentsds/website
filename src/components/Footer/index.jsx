import React from "react"
import { Link } from "gatsby"

import logo from "../../images/payments.png"
import styles from "./styles.module.css"
import footerData from "../../data/links.yaml"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Create a .yaml file to store all these links (and a possible description) */}
      <section className={styles.links}>
        <div>
          <h3 className={styles.title}>Documentação</h3>
          <ul>
            <li>
              <a href={footerData?.links?.docs?.starting}>Começando</a>
            </li>
            <li>
              <a href={footerData?.links?.docs?.api}>Referência API</a>
            </li>
            <li>
              <a href={footerData?.links?.docs?.faq}>Perguntas frequentes</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Bibliotecas</h3>
          <ul>
            <li>
              <a href={footerData?.links?.libraries?.java}>Java</a>
            </li>
            <li>
              <a href={footerData?.links?.libraries?.javascript}>Javascript</a>
            </li>
            <li>
              <a href={footerData?.links?.libraries?.php}>PHP</a>
            </li>
            <li>
              <a href={footerData?.links?.libraries?.python}>Python</a>
            </li>
            <li>
              <a href={footerData?.links?.libraries?.ruby}>Ruby</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Plugins</h3>
          <ul>
            <li>
              <a href={footerData?.links?.plugins?.ecommerce}>E-Comerce</a>
            </li>
            <li>
              <a href={footerData?.links?.plugins?.social}>Social</a>
            </li>
            <li>
              <a href={footerData?.links?.plugins?.cloud}>Cloud</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Comunidade</h3>
          <ul>
            <li>
              <a href={footerData?.links?.community?.foruns}>
                Fóruns de discussão
              </a>
            </li>
            <li>
              <a href={footerData?.links?.community?.blog}>Blog</a>
            </li>
            <li>
              <a href={footerData?.links?.community?.github}>Github</a>
            </li>
            <li>
              <a href={footerData?.links?.community?.linkedin}>Linkedin</a>
            </li>
            <li>
              <a href={footerData?.links?.community?.youtube}>Youtube</a>
            </li>
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
