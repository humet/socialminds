import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AllGravityData from '../hooks/use-gravity-data'
import GravityFormForm from 'gatsby-gravityforms-component'

const ContactPage = () => (
  <Layout className="contactpage">
    <section className="contact">
    <SEO title="Contact" />
    <h1>Get In touch</h1>

    { AllGravityData() &&
          <GravityFormForm
          id={1}
          formData={AllGravityData()}
          />
        }

    </section>
  </Layout>
)

export default ContactPage
