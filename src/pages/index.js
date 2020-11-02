import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Home from "../components/Home"
import Image from "../components/image"
import SEO from "../components/SEO/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
