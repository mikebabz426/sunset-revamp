import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Button from "./../components/Button"

const Headline = styled.h1`
  font-weight: bold;
  color: #333;
  font-size: 64px;
  text-align: center;
  width: 1280px;
`
const BgImage = styled(BackgroundImage)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: center cover;
  background-position: center;
  padding-bottom: 20rem;
`
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BgImage className="hero" fluid={data.hero.childImageSharp.fluid}>
        <Headline>We Provide Proffessional Training for Your Pets</Headline>
        <ButtonBox>
          <Button type="filled" text="What We Offer" />
          <Button type="outlined" text="Contact Us" />
        </ButtonBox>
      </BgImage>
    </Layout>
  )
}

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero-illu.png" }) {
      childImageSharp {
        fluid(pngQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
