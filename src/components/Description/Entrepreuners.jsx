import React from "react"
import { Link } from "gatsby"

import styles from "./entrepreuners.module.css"
import gif from "../../images/entrepeurners.gif"
import Button from "../Button"

const Entrepreuners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={gif}
          alt="Gif demonstrating the various meethods entrepreuners can use PaymentsDS on their business"
        />
      </div>
      <div className={styles.mainTexts}>
        <div className={styles.title}>
          <h1>Empreededores:</h1>
        </div>
        <div className={styles.texts}>
          <p>
            Paymentsds significa pagamentos simples, práticos, e convenientes
            adequados ao contexto do cliente!
          </p>
          <span className={styles.quote}>
            "Implementar um modelo de negócios relevante é difícil, mas ser pago
            não deve ser."
          </span>
        </div>
        <div className={styles.buttonsContainer}>
          <Link to="/docs">
            <Button text="Ver o Repositório" />
          </Link>

          <a href="https://github.com/paymentsds">
            <Button text="Ver a Documentação" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Entrepreuners
