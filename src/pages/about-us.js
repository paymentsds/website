import React from "react"
// import { Link } from "gatsby"

import styles from "../styles/about-us.module.css"
import Layout from "../components/Layout"
import SEO from "../components/SEO/seo"
import image from "../images/payments-logo.png"

const AboutUs = () => (
  <Layout>
    <SEO title="Home" />

    <section className={styles.main}>
      <div className={styles.image}>
        <img src={image} alt="PaymentsDS Logo" />
      </div>
      <div className={styles.texts}>
        <h1>Sobre nós</h1>
        <p>
          A Payments Developer Suite (paymentsds) é um pacote de soluções que
          simplificam a integração a serviços de pagamentos tais como o M-Pesa,
          Conta Móvel, VISA/ MasterCard nas plataformas digitais,
          especificamente em aplicativos, sites de comercio eletrónico
          /e-commerce, software de gestão – ERPs & CRMs, e redes sociais
          (Facebook Business, Instagram Business, WhatsApp Business).
        </p>
      </div>
    </section>

    {/* <section className="sections team"></section> */}
  </Layout>
)

export default AboutUs
