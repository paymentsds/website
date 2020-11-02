import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Home from "../components/Home"
import SEO from "../components/SEO/seo"
import Cards from "../components/Cards"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <div className="card-session">
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
        linkText="Saiba mais"
      />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
