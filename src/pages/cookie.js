import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GetPolicy from "../components/getPolicy"

const PrivacyPage = () => (
  <Layout className="privacypage">
    <section className="privacy">
      <SEO title="Cookie Policy" />
      <GetPolicy id="76482076/cookie-policy" />
    </section>
  </Layout>
)

export default PrivacyPage
