import React, { useEffect } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Container = styled(motion.div)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 768px;
  border-bottom: 1px solid #c7c7c7;

  @media screen and (min-width: 1024px) {
    min-width: 1024px;
  }

  @media screen and (max-width: 767px) {
    flex-direction: ${props => (props.clmn ? "column" : "column-reverse")};
    min-width: 300px;
    padding: 1rem 0;
  }
`

const ImageHolder = styled(Img)`
  height: 300px;
  width: 350px;
  border-radius: 3px;
  padding: 1rem;
`
const Title = styled.h2`
  color: #333;
  font-weight: lighter;
  padding-bottom: 1rem;
`
const TextArea = styled.div`
  max-width: 360px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Description = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: 1.7rem;
  width: 350px;
  color: #535353;
  font-weight: lighter;
`

const Service = ({ dir, name, src, desc }) => {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  let layout
  if (dir === "left") {
    layout = (
      <Container
        clmn="reverse"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 1 }}
      >
        <ImageHolder fluid={src} />
        <TextArea>
          <Title>{name}</Title>
          <Description>{desc}</Description>
        </TextArea>
      </Container>
    )
  } else if (dir === "right") {
    layout = (
      <Container
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 0.8 }}
      >
        <TextArea>
          <Title>{name}</Title>
          <Description>{desc}</Description>
        </TextArea>
        <ImageHolder fluid={src} />
      </Container>
    )
  }

  return <section>{layout}</section>
}

export default Service
