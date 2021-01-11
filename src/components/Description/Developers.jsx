import React from "react"
import { Link } from "gatsby"

import styles from "./developers.module.css"
import devImage from "../../images/developers-00.png"
import Button from "../Button"

const Developers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTexts}>
        <div className={styles.title}>
          <h1>Developers:</h1>
        </div>
        <div className={styles.subTitle}>
          <h2>Começando</h2>
        </div>
        <div className={styles.texts}>
          <p>
            Obtenha as chaves da API de integração.
            <br /> Paymentsds autentica todas as solicitações de API usando as
            chaves de API de integração.
            <br /> Você precisará das chaves de API para fazer solicitações à
            API com êxito.
            <br /> Você pode criar integrações e chaves por meio do Painel,{" "}
            <span>
              <Link to="/page-2">conforme descrito aqui</Link>
            </span>
          </p>
        </div>
        <div className={styles.buttonsContainer}>
          <a href="https://github.com/paymentsds">
            <Button>Ver o Repositório</Button>
          </a>

          <Link to="/docs">
            <Button>Ver a Documentação</Button>
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <img src={devImage} alt="Cards for developers" />
      </div>
    </div>
  )
}

export default Developers
