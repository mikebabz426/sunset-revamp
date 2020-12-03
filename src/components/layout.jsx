import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "normalize.css"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    }
  .active {
    text-decoration: underline #dd2c00;
    text-underline-position: under;
    
    }
  .button {
      :hover{
        cursor: pointer;
      }
    }
  `

const StyledMain = styled.main`
  margin: 0;
  padding: 0;
  width: 100vw;
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </>
  )
}

export default Layout
