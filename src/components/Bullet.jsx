import React from "react"
import styled from "styled-components"
import Paw from "../assets/paw.svg"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem 0.5rem 0.5rem;
`
const Text = styled.h3`
  color: #333;
  font-weight: lighter;
  padding: 0 0.5rem 0.5rem 0.5rem;
`

const Bullet = ({ service }) => {
  return (
    <Container>
      <ImgWrap>
        <Paw />
      </ImgWrap>
      <Text>{service}</Text>
    </Container>
  )
}

export default Bullet
