import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import Img from "gatsby-image"
import { ProvidedServices } from "./../helpers/services-info"
import Service from "./../components/Service"

const Headline = styled.h1`
  font-weight: bold;
  color: #333;
  font-size: 64px;
  text-align: center;
  max-width: 1280px;
  padding: 4rem 4rem 0 4rem;
  margin: 0 auto 1.5rem auto;

  @media screen and (max-width: 800px) {
    font-size: 38px;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
    max-width: 350px;
    padding: 4rem 1rem 2rem 1rem;
  }
`

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
  flex-direction: column;

  @media screen and (max-width: 1024px) {
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
  const { dogs, offLeash, sar, belgian, serviceDog, tricks } = data

  const getImgSrc = name => {
    switch (name) {
      case "Off Leash Training":
        return offLeash.childImageSharp.fluid
      case "Search and Rescue":
        return sar.childImageSharp.fluid
      case "Belgian Malinois Breeding":
        return belgian.childImageSharp.fluid
      case "Tricks Training":
        return tricks.childImageSharp.fluid
      case "Service Dog Training":
        return serviceDog.childImageSharp.fluid
      default:
        throw new Error("no case matches")
    }
  }

  return (
    <Layout>
      <SEO title="Services" />
      <ImageContainer>
        <ImageHolder fluid={dogs.childImageSharp.fluid}></ImageHolder>
      </ImageContainer>
      <Showcase>
        <Headline>Our Services</Headline>
        {ProvidedServices.map((service, i) => {
          const dir = i % 2 === 0 ? "left" : "right"
          const src = getImgSrc(service.name)
          return (
            <Service
              key={service.name}
              dir={dir}
              name={service.name}
              desc={service.description}
              src={src}
            />
          )
        })}
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
    sar: file(relativePath: { eq: "sar.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    belgian: file(relativePath: { eq: "belgian.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    serviceDog: file(relativePath: { eq: "service-dog.jpeg" }) {
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tricks: file(relativePath: { eq: "tricks.jpeg" }) {
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ServicesPage
