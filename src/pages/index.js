import React from "react"

import Layout from "../components/Layout"
import Home from "../components/Home"
import SEO from "../components/SEO/seo"
import Cards from "../components/Card"
import DetailsTexts from "../components/Details"
import Terminal from "../components/Details/Terminal"
import Description from "../components/Description"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <section className="sections card-session">
      <Cards
        title="Developer"
        description="Forneçemos uma suite de soluções para integrar qualquer aplicação a
      serviços de pagamentos com impacto local"
        link="page-2"
        linkText="Integrar agora"
      />
      <Cards
        title="Business"
        description="Forneçemos um conjunto de soluções para transformar o teu negócio para o ambiente digital e aumentar os canais de facturação e vendas"
        link="page-2"
        sideColor="red"
        linkText="Saiba mais"
      />
    </section>

    <section className="sections details">
      <DetailsTexts />
      <Terminal />
    </section>

    <section className="sections description">
      <Description />
    </section>
  </Layout>
)

export default IndexPage
