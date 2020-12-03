import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the Contact page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
