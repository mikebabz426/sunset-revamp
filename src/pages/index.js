import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Button from "./../components/Button"
import Card from "../components/Card"

const Headline = styled.h1`
  font-weight: bold;
  color: #333;
  font-size: 64px;
  text-align: center;
  max-width: 1280px;

  @media (max-width: 600px) {
    font-size: 32px;
    max-width: 350px;
  }
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
const ServicesShowcase = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1280;
`
const SectionHeadline = styled.h2`
  color: #333;
  font-weight: 500;
  text-align: center;
  max-width: 1280;
  margin: 4rem 0 2rem 0;
  font-size: 32px;
`
const SubHeadline = styled.h3`
  color: #333;
  font-weight: 500;
  text-align: center;
  max-width: 1280;
  margin: 1rem;
`
const CardArea = styled.div`
  margin: 4rem auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const IndexPage = ({ data }) => {
  const { hero, offLeash, behavioral, searchRescue } = data

  return (
    <Layout>
      <SEO title="Home" />
      <BgImage className="hero" fluid={hero.childImageSharp.fluid}>
        <Headline>We Provide Proffessional Training for Your Pets</Headline>
        <ButtonBox>
          <Button type="filled" text="What We Offer" />
          <Button type="outlined" text="Contact Us" />
        </ButtonBox>
      </BgImage>
      <ServicesShowcase>
        <SectionHeadline>
          Get Expert Help Training Your Dog or Puppy
        </SectionHeadline>
        <SubHeadline>What we can do for you</SubHeadline>
        <CardArea>
          <Card title="Off Leash" fluid={offLeash.childImageSharp.fluid} />
          <Card
            title="Search and Rescue"
            fluid={searchRescue.childImageSharp.fluid}
          />
          <Card
            title="Behavioral Issues"
            fluid={behavioral.childImageSharp.fluid}
          />
        </CardArea>
      </ServicesShowcase>
    </Layout>
  )
}

export const query = graphql`
  {
    hero: file(relativePath: { eq: "hero-illu.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920, pngQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    offLeash: file(relativePath: { eq: "off-leash.png" }) {
      childImageSharp {
        fluid(pngQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    behavioral: file(relativePath: { eq: "behavioral.png" }) {
      childImageSharp {
        fluid(pngQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    searchRescue: file(relativePath: { eq: "search-rescue.png" }) {
      childImageSharp {
        fluid(pngQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
