import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { graphql } from "gatsby"
import Button from "./../components/Button"
import Card from "../components/Card"
import Testimonial from "./../components/Testimonial"
import { Testimonials } from "./../helpers/services-info"
import Img from "gatsby-image"

const Headline = styled.h1`
  font-weight: bold;
  color: #333;
  font-size: 64px;
  text-align: center;
  max-width: 1280px;
  padding: 0 4rem;
  margin: 0 auto 1.5rem auto;

  @media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 450px) {
    margin-top: 20rem;
    font-size: 38px;
  }

  @media screen and (max-width: 800px) {
    font-size: 38px;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
    max-width: 350px;
    padding: 0 1rem;
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
  min-height: 50vh;
  max-width: 1280;

  @media screen and (min-width: 1024px) {
    max-height: 120vh;
  }

  @media screen and (orientation: landscape) and (max-width: 1100px) and (max-height: 800px) {
    min-height: 200vh;
  }
`
const DogSection = styled.div`
  margin: 0 auto;
  padding: 3rem auto;
  min-height: 50vh;
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
  font-size: 20px;
`
const CardArea = styled.div`
  margin: 3rem auto;
  max-width: 1280px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
const CalltoAction = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1280px;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
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
  font-size: 20px;
  line-height: 1.8rem;
  width: 350px;
  color: #535353;
  font-weight: lighter;
`
const TestimonialSection = styled.div`
  width: 100vw;
  background-color: #f8f8f8;
  padding-top: 3rem;
`

const Stripe = styled.div`
  background-color: #ffdddb;
  margin: 15rem auto 12rem auto;
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  @media screen and (max-width: 800px) {
    margin: 20rem auto 20rem auto;
  }

  @media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 450px) {
    margin-bottom: 20rem;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`
const OffsetContainer = styled.div`
  margin: 3rem auto;
  width: 1280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: -200px;

  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    width: 990px;
  }

  @media screen and (max-width: 830px) {
    width: 750px;
    flex-wrap: wrap;
    position: static;
  }
`

const MobileContainer = styled.div`
  margin: 3rem auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 601px) {
    display: none;
  }
`
const Filler = styled.div`
  height: 5vh;
  width: 100vw;
  background-color: #f8f8f8;
`

const TestimonialHeadline = styled.h1`
  font-weight: bold;
  color: #333;
  font-size: 64px;
  text-align: center;
  max-width: 1280px;
  padding: 0 4rem;
  margin: 0 auto 1.5rem auto;

  @media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 450px) {
    font-size: 48px;
  }

  @media screen and (max-width: 800px) {
    font-size: 38px;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
    max-width: 350px;
    padding: 0 1rem;
  }
`
const TestimonialSub = styled.h3`
  color: #333;
  font-weight: 500;
  text-align: center;
  max-width: 1280;
  margin: 1rem 1rem;
  font-size: 20px;
  @media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 450px) {
    margin-bottom: 20rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
const DogHeadline = styled.h1`
  font-weight: bold;
  color: #333;
  font-size: 64px;
  text-align: center;
  max-width: 1280px;
  padding: 0 4rem;
  margin: 0 auto 1.5rem auto;

  @media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 450px) {
    font-size: 48px;
  }

  @media screen and (max-width: 800px) {
    font-size: 38px;
  }

  @media screen and (max-width: 600px) {
    font-size: 28px;
    max-width: 350px;
    padding: 0 1rem;
  }
`
const IndexPage = ({ data }) => {
  const { hero, offLeash, behavioral, searchRescue, bad, angel } = data

  return (
    <Layout>
      <SEO title="Home" />
      <BgImage className="hero" fluid={hero.childImageSharp.fluid}>
        <Headline>We Provide Proffessional Training for Your Pets</Headline>
        <ButtonBox>
          <Button type="filled" text="What We Offer" pageLink="/services" />
          <Button type="outlined" text="Contact Us" pageLink="/contact" />
        </ButtonBox>
      </BgImage>
      <Showcase style={{ backgroundColor: "#f8f8f8" }}>
        <SectionHeadline>
          Get Expert Help Training Your Dog or Puppy
        </SectionHeadline>
        <SubHeadline>
          Here are some of the services we specialize in!
        </SubHeadline>
        <CardArea>
          <Card
            title="Off Leash"
            fluid={offLeash.childImageSharp.fluid}
            body="Our exceptional obedience training will give you the opportunity to take your dog with you wherever you go, both on or off leash."
          />
          <Card
            title="Search and Rescue"
            body="When someone goes missing in the wilderness, an SAR K9 is trained to pick up on scents left in the area in the last day or so and successfully track them, potentially saving the missing person.  Let us help train your dog to be a hero. "
            fluid={searchRescue.childImageSharp.fluid}
          />
          <Card
            title="Behavioral Issues"
            body="Has your dog picked up a few bad or annoying habbits?  We can help isolate these issues and correct obsessive or troublesome behaviors. "
            fluid={behavioral.childImageSharp.fluid}
          />
        </CardArea>
        <CalltoAction>
          <SubHeadline>
            Let us help you get started off on the right... paw.
          </SubHeadline>
          <Button type="outlined" text="Click Here" pageLink="/services" />
          <SubHeadline>to see the full spectrum of our services.</SubHeadline>
        </CalltoAction>
      </Showcase>
      <DogSection>
        <BadDogSection>
          <ImageHolder fluid={bad.childImageSharp.fluid}></ImageHolder>
          <TextContainer>
            <DogHeadline>Got a rebel on your hands?</DogHeadline>
          </TextContainer>
        </BadDogSection>
        <GoodDogSection>
          <TextContainer>
            <DogHeadline>We Can Help!</DogHeadline>
            <TextArea>
              We will isolate issues and work on your specific needs to
              successfully correct and shape behavior to allow your dog to
              become the angel you always knew he or she can be.{" "}
            </TextArea>
          </TextContainer>
          <ImageHolder fluid={angel.childImageSharp.fluid}></ImageHolder>
        </GoodDogSection>
      </DogSection>
      <TestimonialSection>
        <TestimonialHeadline>Don't take our word for it,</TestimonialHeadline>
        <TestimonialSub>
          here's what some of our customers had to say about their experience.
        </TestimonialSub>
        <Stripe>
          <OffsetContainer>
            {Testimonials.map(quote => (
              <Testimonial
                name={quote.name}
                body={quote.body}
                key={quote.name}
              />
            ))}
          </OffsetContainer>
        </Stripe>
        <MobileContainer>
          {Testimonials.map(quote => (
            <Testimonial name={quote.name} body={quote.body} key={quote.name} />
          ))}
        </MobileContainer>
        <Filler></Filler>
      </TestimonialSection>
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
