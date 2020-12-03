import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Hi from the Services page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage
