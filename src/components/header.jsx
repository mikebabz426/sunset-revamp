import React, { useState } from "react"
import styled from "styled-components"
import Logo from "../assets/white-logo.svg"
import { Link } from "gatsby"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"

const NavWrap = styled.header`
  height: 64px;
  background-color: ${props => (props.bgcolor ? " #ff8a65" : "transparent")};
  position: fixed;
  top: 0;
  width: 100%;
`
const Nav = styled.nav`
  margin: 0 auto;
  max-width: 1280px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const LogoElement = styled.div`
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoWrap = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const LogoText = styled.h4`
  display: inline-block;
  margin-left: 1rem;
  color: #333;
`
const StyledIconButton = styled.button`
  @media (max-width: 800px) {
    display: block;
    margin: 0 1rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    :focus {
      outline: 0;
    }
  }
  display: none;
`

const StyledMenuIcon = styled(MenuIcon)`
  color: #333;
`
const StyledCloseIcon = styled(CloseIcon)`
  color: #333;
`
const MenuLinks = styled.ul`
  @media (max-width: 800px) {
    display: none;
  }
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  margin: 0 1rem;
  &:hover {
    color: #ffbb93;
  }
`
const MobileLinks = styled.nav`
  background-color: #f89475;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 50vw;
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  transition: transform 800ms;
  transform: ${({ nav }) => (nav ? "translateX(0%)" : "translateX(100%)")};

  ul {
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;

    li {
      padding: 2rem 0;
      width: 100%;
      :hover {
        background-color: #ffbb93;
      }
    }

    a {
      text-decoration: none;
      color: #000;
      font-size: 1.5rem;
      transition: color 300ms;
      width: 100%;

      :hover {
        background-color: #ffbb93;
      }
    }
  }
`

const Header = () => {
  const [nav, setNav] = useState(false)
  const [navBg, setNavBg] = useState(false)

  const changeBg = () => {
    if (window.scrollY > 64) {
      setNavBg(true)
    } else {
      setNavBg(false)
    }
  }

  window.addEventListener("scroll", changeBg)

  return (
    <NavWrap bgcolor={navBg}>
      <Nav>
        <LogoElement>
          <LogoWrap>
            <Logo />
          </LogoWrap>
          <LogoText>Sunset Canines</LogoText>
        </LogoElement>
        <StyledIconButton onClick={() => setNav(!nav)}>
          {nav ? <StyledCloseIcon /> : <StyledMenuIcon />}
        </StyledIconButton>
        <MenuLinks>
          <StyledLink activeClassName="active" to="/">
            Home
          </StyledLink>
          <StyledLink activeClassName="active" to="/about">
            About
          </StyledLink>
          <StyledLink activeClassName="active" to="/services">
            Services
          </StyledLink>
          <StyledLink activeClassName="active" to="/contact">
            Contact
          </StyledLink>
        </MenuLinks>
        <MobileLinks nav={nav}>
          {" "}
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" activeClassName="active">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
          </ul>
        </MobileLinks>
      </Nav>
    </NavWrap>
  )
}

export default Header
