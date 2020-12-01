import React from "react"
import Header from "./header"
import Footer from "./footer"
import "normalize.css"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  .active {
    color: #ffffff;
    
  }
  `

const StyledMain = styled.main`
  margin-top: 64px;
  width: 100%;
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
