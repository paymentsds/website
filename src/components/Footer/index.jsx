import React from "react"
import {Link} from "gatsby"
import logo from "../../images/payments.png"
import styles from "./styles.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Create a .yaml file to store all these links (and a possible description) */}
      <section className={styles.links}>
        <div>
          <h3 className={styles.title}>Documentação</h3>
          <ul>
            <li><Link to="/">Começando</Link></li>
            <li><Link to="/">Referência API</Link></li>
            <li><Link to="/">Perguntas frequentes</Link></li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Bibliotecas</h3>
          <ul>
            <li><Link to="/">Java</Link></li>
            <li><Link to="/">Javascript</Link></li>
            <li><Link to="/">PHP</Link></li>
            <li><Link to="/">Python</Link></li>
            <li><Link to="/">Ruby</Link></li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Plugins</h3>
          <ul>
            <li><Link to="/">E-Comerce</Link></li>
            <li><Link to="/">Social</Link></li>
            <li><Link to="/">Cloud</Link></li>
          </ul>
        </div>
        <div>
          <h3 className={styles.title}>Comunidade</h3>
          <ul>
            <li><Link to="/">Fóruns de discussão</Link></li>
            <li><Link to="/">Blog</Link></li>
            <li><Link to="/">Github</Link></li>
            <li><Link to="/">Linkedin</Link></li>
            <li><Link to="/">Youtube</Link></li>
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
