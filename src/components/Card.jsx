import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const CardHolder = styled.div`
  margin: 2rem 1rem;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  background-color: #fff;
  border-radius: 5px;
`

const ImageHolder = styled(Img)`
  width: 320px;
  height: 300px;
  border-radius: 5px 5px 0 0;
`
const CardHead = styled.h4`
  font-weight: bold;
  margin: 1rem 0 0 0;
`

const Body = styled.p`
  text-align: justify;
  max-width: 300px;
  margin: 1rem 0.5rem;
  line-height: 1.5rem;
`
const Card = ({ title, fluid }) => {
  return (
    <CardHolder>
      <ImageHolder fluid={fluid}></ImageHolder>
      <CardHead>{title}</CardHead>
      <Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        provident minus animi voluptatum similique itaque commodi! Minus
        distinctio consequuntur aspernatur.
      </Body>
    </CardHolder>
  )
}

export default Card
