import React from "react"
import { Link } from "gatsby"

import styles from "./entrepreuners.module.css"
import gif from "../../images/entrepeurners.gif"
import Button from "../Button"
import check from "../../images/check.svg"

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
          <p>
            Delicie os teus clientes com uma experiência de pagamento simples,
            prática e coveniente oferecendo a estes metodos de pagamentos
            práticos, modernos,e sem atritos.
            <br />
            Integre a tua solução ao paymentsds e deixe seus clientes pagarem
            como quiserem.
          </p>
        </div>

        <div className={styles.supportedServices}>
          <p>
            <img src={check} alt="Check" /> M-pesa
          </p>
          <p>
            <img src={check} alt="Check" /> Conta Móvel (Brevemente)
          </p>
          <p>
            <img src={check} alt="Check" /> Cartão de Débito/Crédito
            (Brevemente)
          </p>
        </div>

        <div className={styles.buttonsContainer}>
          <Link to="/docs">
            <Button text="Transformar o meu negócio" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Entrepreuners
