import React from "react"
import { Link } from "gatsby"

import rightArrow from "../../images/chevron-right 2.svg"
import styles from "./styles.module.css"
import Cards from "../Cards"

const DetailsTexts = () => {
  return (
    <div className={styles.main}>
      <p className={styles.title}>Feito para Developers</p>
      <h1 className={styles.mainTitle}>Documentação</h1>
      <p className={styles.description}>
        Acesse a documentação do desenvolvedor e torne as tuas aplicações
        prontas para efectuar as transações online.
      </p>
      <Link to="/docs" className={styles.link}>
        <button className={styles.button}>
          Ver a documentação <img src={rightArrow} alt="Right Arrow" />
        </button>
      </Link>

      <div className={styles.detailsColumns}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>SDKs</h4>
          <p className={styles.columnText}>
            Comece rapidamente a integrar a tua aplicação. Use nossos SDKs PHP,
            JS, Java, Python, Ruby,e mais.
          </p>
          <Link to="/page-2" className={styles.columnLink}>
            Use os SDKs
          </Link>
        </div>

        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Blog</h4>
          <p className={styles.columnText}>
            Receba as últimas notícias, informações e dicas sobre a plataforma
            paymentsds e sobre o sector das Fintech local.
          </p>
          <Link to="/page-2" className={styles.columnLink}>
            Ver Blog
          </Link>
        </div>
      </div>

      <Cards
        title="Fórum"
        description="Junte-se à nossa comunidade, partilha as tuas dúvidas e ajuda a developers como tu a integrarem a suas aplicações as plataformas de pagamento."
        link="page-2"
        linkText="Aceder aos fóruns"
        isDetails
      />
    </div>
  )
}

export default DetailsTexts
