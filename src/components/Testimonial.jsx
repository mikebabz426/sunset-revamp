import React from "react"
import styled from "styled-components"
import FormatQuoteIcon from "@material-ui/icons/FormatQuote"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffe4e2",
    color: "#fb7c73",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    position: "absolute",
    top: "-50px",
    border: "10px solid #fff",
  },
})

const CardHolder = styled.div`
  margin: 1rem auto;
  max-width: 320px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: justify;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);

  /* @media screen and (orientation: landscape) and (max-width: 850px) and (max-height: 450px) {
  } */
`

const Header = styled.div`
  background-color: #ff928b;
  height: 100px;
  width: 100%;
  border-radius: 5px 5px 0 0;
`

const Name = styled.h5`
  margin: 1rem 0 1rem 0;
  font-weight: lighter;
`

const Body = styled.p`
  color: #5f5f5f;
  text-align: center;
  font-style: italic;
  font-size: small;
  max-width: 300px;
  margin: 3rem 0.5rem 1rem 0.5rem;
  line-height: 1.5rem;
  padding: 0.5rem;
`
const BodySection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`

const Testimonial = ({ name, body }) => {
  const classes = useStyles()
  return (
    <CardHolder>
      <Header></Header>
      <BodySection>
        <FormatQuoteIcon className={classes.root} />
        <Body>{body}</Body>
        <Name>- {name}</Name>
      </BodySection>
    </CardHolder>
  )
}

export default Testimonial
