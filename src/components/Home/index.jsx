import React from "react"

import styles from "./styles.module.css"
import mainImg from "../../images/payments-logo.png"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTexts}>
        <div className={styles.title}>
          <h1>Payments Developer Suite</h1>
        </div>
        <div className={styles.subTitle}>
          <h2>Integrando soluções digitais para criar impacto local.</h2>
        </div>
      </div>
      <div className={styles.image}>
        <img src={mainImg} alt="PaymentsDS Logo" />
      </div>
    </div>
  )
}

export default Home
