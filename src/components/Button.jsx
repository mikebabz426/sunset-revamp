import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FilledButton = styled(Link)`
  background-color: #fe6d73;
  color: #333;
  text-decoration: none;
  border-radius: 3px;
  border: none;
  padding: 1rem;
  font-weight: bold;
  :hover {
    cursor: pointer;
    transition: transform 500ms ease-in-out;
    transform: translateY(-1px);
  }
  :focus {
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 0.75rem;
  }
`
const OutlinedButton = styled(Link)`
  background-color: #fff;
  color: #ff3a40;
  text-decoration: none;
  border-radius: 2px;
  border: 1px solid #fe6d73;
  padding: 0.6rem;
  margin: 1rem 1rem;
  font-weight: bold;
  :hover {
    cursor: pointer;
    transition: transform 500ms ease-in-out;
    transform: translateY(-1px);
  }
  :focus {
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`

const Button = ({ type, text, pageLink }) => {
  return (
    <>
      {type === "outlined" ? (
        <OutlinedButton to={pageLink}>{text}</OutlinedButton>
      ) : (
        <FilledButton to={pageLink}>{text}</FilledButton>
      )}
    </>
  )
}

export default Button
