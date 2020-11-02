import React from "react"

import styles from "./styles.module.css"
import mainImg from "../../images/payments-logo.png"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainTexts}>
        <div className={styles.title}>
          <h1>Payments</h1>
          <h1>Developer Suite</h1>
        </div>
        <div className={styles.subTitle}>
          <p>Integrando soluções digitais para criar</p>
          <p>impacto local.</p>
        </div>
      </div>
      <div className={styles.image}>
        <img src={mainImg} alt="PaymentsDS" />
      </div>
    </div>
  )
}

export default Home
