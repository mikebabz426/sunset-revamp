import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Button from "./../components/Button"
import Card from "../components/Card"
import Img from "gatsby-image"

const Headline = styled.h1`
  font-weight: bold;
  color: #333;
  font-size: 64px;
  text-align: center;
  max-width: 1280px;
  margin: 1.5rem auto;

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
const Showcase = styled.div`
  margin: 0 auto;
  padding: 3rem auto;
  min-height: 100vh;
  max-width: 1280;
`
const SectionHeadline = styled.h2`
  color: #333;
  font-weight: 500;
  text-align: center;
  max-width: 1280;
  padding: 4rem 0 2rem 0;
  font-size: 32px;
`
const SubHeadline = styled.h3`
  color: #333;
  font-weight: 500;
  text-align: center;
  max-width: 1280;
  margin: 1rem 0;
`
const CardArea = styled.div`
  margin: 3rem auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const CalltoAction = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const ImageHolder = styled(Img)`
  width: 320px;
  height: 300px;
  border-radius: 5px 5px 0 0;
`

const BadDogSection = styled.div`
  margin: 6rem auto;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const GoodDogSection = styled.div`
  margin: 4rem auto;
  max-width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const TextContainer = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TextArea = styled.p`
  text-align: justify;
  font-size: 24px;
  line-height: 1.8rem;
  width: 350px;
  color: #333;
  font-weight: 500;
`
const Stripe = styled.div`
  max-width: 100%;
  margin: 12rem auto 0rem auto;
  background-color: #ff928b;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* position: relative;
  margin-top: 8rem; */
  @media (max-width: 600px) {
    display: none;
  }
`
const OffsetContainer = styled.div`
  margin: 3rem auto;
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: absolute; */
`

const IndexPage = ({ data }) => {
  const { hero, offLeash, behavioral, searchRescue, bad, angel } = data

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
      <Showcase style={{ backgroundColor: "#f8f8f8" }}>
        <SectionHeadline>
          Get Expert Help Training Your Dog or Puppy
        </SectionHeadline>
        <SubHeadline>
          Here are some of the services we specialize in
        </SubHeadline>
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
        <CalltoAction>
          <SubHeadline>
            Let us help you get started off on the right... paw.
          </SubHeadline>
          <Button type="outlined" text="Click Here" />
          <SubHeadline>to see the full spectrum of our services.</SubHeadline>
        </CalltoAction>
      </Showcase>
      <Showcase>
        <BadDogSection>
          <ImageHolder fluid={bad.childImageSharp.fluid}></ImageHolder>
          <TextContainer>
            <Headline>Got a rebel on your hands?</Headline>
          </TextContainer>
        </BadDogSection>
        <GoodDogSection>
          <TextContainer>
            <Headline>We Can Help!</Headline>
            <TextArea>
              We will isolate issues and work on your specific needs to
              successfully correct and shape behavior to allow your dog to
              become the angel you always knew he or she can be.{" "}
            </TextArea>
          </TextContainer>
          <ImageHolder fluid={angel.childImageSharp.fluid}></ImageHolder>
        </GoodDogSection>
      </Showcase>
      <Showcase style={{ backgroundColor: "#f8f8f8", paddingTop: "3rem" }}>
        <Headline>Don't take our word for it</Headline>
        <Stripe>
          <OffsetContainer>
            <Card
              title="Behavioral Issues"
              fluid={behavioral.childImageSharp.fluid}
            />
            <Card
              title="Behavioral Issues"
              fluid={behavioral.childImageSharp.fluid}
            />
            <Card
              title="Behavioral Issues"
              fluid={behavioral.childImageSharp.fluid}
            />
          </OffsetContainer>
        </Stripe>
      </Showcase>
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
        fluid(pngQuality: 100) {
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
    bad: file(relativePath: { eq: "bad-dog.jpeg" }) {
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    angel: file(relativePath: { eq: "angel.jpeg" }) {
      childImageSharp {
        fluid(jpegQuality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
