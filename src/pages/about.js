import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import Img from "gatsby-image"
import Dots from "../assets/dots.svg"
import { graphql } from "gatsby"
import { motion } from "framer-motion"

const Showcase = styled.div`
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

const TextArea = styled(motion.div)`
  display: flex;
  padding: 1rem;
  padding-top: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;

  @media screen and (max-width: 600px) {
    max-width: 350px;
    margin: 4rem auto;
  }
`
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  margin-top: 0;
`

const Highlight = styled(motion.span)`
  color: #f85a4f;
`
const Body = styled.p`
  text-align: justify;
  font-size: 20px;
  line-height: 2rem;
  color: #535353;
  font-weight: lighter;
`

const ImageHolder = styled(Img)`
  width: 500px;
  height: 600px;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 250px;
    height: 300px;
    margin-bottom: 4rem;
  }
`
const ImageWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;
`
const StyleElement = styled(Dots)`
  position: absolute;
  width: 100px;
  height: 100px;
  top: -45px;
  right: -25px;
  z-index: 10;
  opacity: 0.7;
`
const SecondaryEle = styled(Dots)`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: -45px;
  left: -25px;
  z-index: -10;
  opacity: 0.7;
  @media screen and (max-width: 600px) {
    bottom: +5px;
    left: -25px;
  }
`

const AboutPage = ({ data }) => {
  const { about } = data
  return (
    <Layout>
      <SEO title="About" />
      <Showcase>
        <TextArea
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 1 }}
        >
          <Title>
            About{" "}
            <Highlight
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ delay: 1.1 }}
            >
              Us
            </Highlight>
          </Title>
          <Body>
            We are a facility that travels all over the United States for our
            clients and we are commited to helping people have better
            communication with their dogs! Every one of our programs is tailored
            to your dog's specific needs and goals, this way ensuring you
            realize your dog's full potential. We offer more than just
            obedience, a few of our special services include Search and Rescue,
            service dog work, and so much more! Our mission is simple: to
            provide dog owners with the highest quality dog training services
            available.
          </Body>
        </TextArea>
        <ImageWrap>
          <StyleElement></StyleElement>
          <ImageHolder fluid={about.childImageSharp.fluid} />
          <SecondaryEle></SecondaryEle>
        </ImageWrap>
      </Showcase>
    </Layout>
  )
}

export const query = graphql`
  {
    about: file(relativePath: { eq: "about.jpeg" }) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
