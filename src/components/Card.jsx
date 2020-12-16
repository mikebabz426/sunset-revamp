import React, { useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const CardHolder = styled(motion.div)`
  margin: 2rem 1rem;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
`

const ImageHolder = styled(Img)`
  width: 320px;
  height: 300px;
  border-radius: 5px 5px 0 0;
`
const CardHead = styled.h3`
  font-weight: bold;
  margin: 1rem 0 0 0;
`

const Body = styled.p`
  text-align: justify;
  max-width: 300px;
  margin: 1rem 0.5rem;
  line-height: 1.5rem;
  color: #525252;
`
const Card = ({ title, fluid, body }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <CardHolder
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      transition={{ duration: 0.8 }}
    >
      <ImageHolder fluid={fluid}></ImageHolder>
      <CardHead>{title}</CardHead>
      <Body>{body}</Body>
    </CardHolder>
  )
}

export default Card
