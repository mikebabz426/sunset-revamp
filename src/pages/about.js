import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the About page</h1>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
