import React from "react"

import styles from "./styles.module.css"
import mainImg from "../../images/payments-logo.png"

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainTexts}>
        <h1 className={styles.title}>Payments Developer Suite</h1>
        <h2 className={styles.subTitle}>Integrando soluções digitais para criar impacto local.</h2>
      </div>
      <div className={styles.image}>
        <img src={mainImg} alt="PaymentsDS Logo" />
      </div>
    </section>
  )
}

export default Home
