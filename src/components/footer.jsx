import React from "react"
import styled from "styled-components"
// import FB from "../assets/facebook.svg"
// import IG from "../assets/instagram.svg"
// import TW from "../assets/twitter.svg"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import TwitterIcon from "@material-ui/icons/Twitter"

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: #ff8a65;
`

const Heading = styled.h3`
  color: #333;
  font-weight: 500;
`

const SecondaryText = styled.h5`
  font-weight: 500;
`
const IconContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const SocialIconBox = styled.div`
  margin: 3rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  :hover {
    cursor: pointer;
    transition: transform 500ms ease-in-out;
    transform: translateY(-0.1rem) translateX(0.1rem);
  }
`

const StyledLink = styled.a`
  color: #333;
  text-decoration: none;
`

const Footer = () => {
  return (
    <Container>
      <Heading>Follow us on social media!</Heading>
      <IconContainer>
        <SocialIconBox>
          <StyledLink
            href="https://www.facebook.com/sunsetcanines/"
            aria-label="link to facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon fontSize="large" />
          </StyledLink>
        </SocialIconBox>
        <SocialIconBox>
          <StyledLink
            href="https://www.instagram.com/sunset.canines"
            aria-label="link to instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon fontSize="large" />
          </StyledLink>
        </SocialIconBox>
        <SocialIconBox>
          <StyledLink
            href="https://www.twitter.com/"
            aria-label="link to twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon fontSize="large" />
          </StyledLink>
        </SocialIconBox>
      </IconContainer>
      <SecondaryText>
        {" "}
        © {new Date().getFullYear()}, Sunset Canines
      </SecondaryText>
    </Container>
  )
}

export default Footer
