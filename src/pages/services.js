import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  background-color: #fff;
  max-width: 1280px;
  max-height: 50vh;
  margin: 60px auto 0 auto;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Showcase = styled.div`
  background-color: #f2f2f2;
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin: 5rem auto;
  }
`
const ImageHolder = styled(Img)`
  height: 150px;
  width: 400px;
  position: absolute;
  bottom: -35px;
  @media screen and (max-width: 1024px) {
    bottom: -115px;
  }
`

const ServicesPage = ({ data }) => {
  const { dogs, offLeash } = data
  return (
    <Layout>
      <SEO title="Services" />
      <ImageContainer>
        <ImageHolder fluid={dogs.childImageSharp.fluid}></ImageHolder>
      </ImageContainer>
      <Showcase>
        <h1>Hi from the Services page</h1>
      </Showcase>
    </Layout>
  )
}

export const query = graphql`
  {
    dogs: file(relativePath: { eq: "dogs-overlook.jpeg" }) {
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    offLeash: file(relativePath: { eq: "off-leash-dog.jpeg" }) {
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ServicesPage
