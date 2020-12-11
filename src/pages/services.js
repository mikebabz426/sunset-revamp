import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import Img from "gatsby-image"
import { ProvidedServices } from "./../helpers/services-info"
import Service from "./../components/Service"
import Bullet from "./../components/Bullet"
import Button from "./../components/Button"

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
const Additional = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 768px;

  @media screen and (min-width: 1024px) {
    min-width: 1024px;
  }

  @media screen and (max-width: 767px) {
    min-width: 300px;
    padding: 1rem 0;
  }
`
const AdditionalHeadline = styled.h2`
  font-weight: bold;
  color: #333;
  font-size: 40px;
  text-align: center;
  max-width: 1280px;
  padding: 2rem 4rem 0 4rem;
  margin: 0 auto 1.5rem auto;

  @media screen and (max-width: 800px) {
    font-size: 30px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
    max-width: 350px;
    padding: 4rem 1rem 2rem 1rem;
  }
`

const Bullets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 350px;

  @media screen and (max-width: 767px) {
    padding-bottom: 2rem;
  }
`
const AddWrap = styled.div`
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-width: 900px;
  border-bottom: 1px solid #c7c7c7;

  @media screen and (max-width: 900px) {
    min-width: 700px;
    padding: 1rem 0;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    min-width: 300px;
    padding: 1rem 0;
  }
`

const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
`
const Message = styled.h2`
  font-weight: lighter;
  text-align: center;
  color: #333;
  padding: 0rem 0rem 2rem 0rem;
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
        <Additional>
          <AdditionalHeadline>Additional Services</AdditionalHeadline>
          <AddWrap>
            <Bullets>
              <Bullet service="Scent Work" />
              <Bullet service="Sports Training" />
              <Bullet service="Bite Work" />
              <Bullet service="Day Care" />
              <Bullet service="Dock Diving Lessons" />
              <Bullet service="Vacation Stays" />
            </Bullets>
            <CallToAction>
              <Message>
                Please contact us directly for detailed information on all our
                services!
              </Message>
              <Button type="filled" text="Contact Us" pageLink="/contact" />
            </CallToAction>
          </AddWrap>
        </Additional>
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
