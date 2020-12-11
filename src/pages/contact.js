import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import styled from "styled-components"
import Img from "gatsby-image"
import Dots from "../assets/dots.svg"
import { graphql } from "gatsby"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"

const Showcase = styled.div`
  max-width: 1280px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 900px) {
    margin: 5rem auto;
    flex-direction: column;
  }
`
const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;

  @media screen and (max-width: 900px) {
    max-width: 350px;
    padding: 1rem auto;
  }
`

const Label = styled.label`
  color: #333;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem;
`

const StyledField = styled(Field)`
  width: 80%;
  height: 35px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 3px;
  padding: 1rem;

  :focus {
    outline: #fd787c solid 1px;
  }
`

const StyledForm = styled(Form)`
  padding: 0;
  border-radius: 3px;
  background-color: #f0f0f0;
  width: 500px;
  min-height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    min-height: 1366px;
    padding: 1rem auto;
  }
  @media screen and (max-width: 900px) {
    min-height: 600px;
    padding: 1rem auto;
    margin-bottom: 4rem;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
  }
`
const StyledTextArea = styled.textarea`
  width: 80%;
  min-height: 100px;
  border: 1px solid #ccc;
  background-color: #fff;

  :focus {
    outline: #fd787c solid 1px;
  }
`

const Button = styled.button`
  width: 80%;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #fd787c;
  color: #333;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 3px;
  border: none;
  font-weight: bold;

  :hover {
    cursor: pointer;
    background-color: #ff656a;
    transition: transform 100ms ease-in;
    transform: translateY(-1px);
  }
  :focus {
    outline: none;
  }

  @media (max-width: 600px) {
    padding: 0.75rem;
  }
`
const Error = styled.p`
  color: #b00020;
  font-weight: bold;
`

const ImageHolder = styled(Img)`
  width: 500px;
  height: 600px;
  border-radius: 5px;

  @media screen and (max-width: 1024px) {
    width: 350px;
    height: 400px;
    padding: 1rem auto;
  }

  @media screen and (max-width: 600px) {
    width: 250px;
    height: 300px;
    margin-bottom: 4rem;
  }
`
const ImageSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1rem 0 1rem;
`
const StyleElement = styled(Dots)`
  position: absolute;
  width: 100px;
  height: 100px;
  top: -45px;
  right: -25px;
  z-index: 10;
  opacity: 0.7;
`
const SecondaryEle = styled(Dots)`
  position: absolute;
  width: 100px;
  height: 100px;
  bottom: -45px;
  left: -25px;
  z-index: -1;
  opacity: 0.7;
  @media screen and (max-width: 600px) {
    bottom: +5px;
    left: -25px;
  }
`

const contactSchema = Yup.object().shape({
  name: Yup.string().required().min(3),
  email: Yup.string().email().required(),
  message: Yup.string().required(),
})

const ContactPage = ({ data }) => {
  const { contact } = data
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <Showcase>
        <FormSection>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={contactSchema}
            onSubmit={(values, actions) => {
              fetch("/", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: encode({ "form-name": "contact", ...values }),
              })
                .then(() => {
                  alert("Success")
                  actions.resetForm()
                })
                .catch(() => {
                  alert("Error")
                })
                .finally(() => actions.setSubmitting(false))
            }}
          >
            {({ errors, touched }) => (
              <StyledForm
                name="contact"
                data-netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <Field type="hidden" name="bot-field" />
                <Field type="hidden" name="form-name" value="contact" />
                <h1 style={{ textAlign: "center" }}>
                  Have questions? We're here for you!
                </h1>
                <h3
                  style={{
                    textAlign: "center",
                    marginBottom: "2rem",
                    fontWeight: "lighter",
                  }}
                >
                  Send us a message for a free consultation
                </h3>
                <Label htmlFor="name">Name</Label>
                <StyledField name="name" type="input" />
                {errors.name && touched.name ? (
                  <div>
                    <Error>* {errors.name}</Error>
                  </div>
                ) : null}
                <Label htmlFor="email">Email</Label>
                <StyledField name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>
                    <Error>* {errors.email}</Error>
                  </div>
                ) : null}
                <Label htmlFor="message">Message</Label>
                <Field name="message" type="input" as={StyledTextArea} />
                {errors.message && touched.message ? (
                  <div>
                    <Error>* {errors.message}</Error>
                  </div>
                ) : null}
                <Button type="submit">Send</Button>
              </StyledForm>
            )}
          </Formik>
        </FormSection>
        <ImageSection>
          <StyleElement></StyleElement>
          <ImageHolder fluid={contact.childImageSharp.fluid} />
          <SecondaryEle></SecondaryEle>
        </ImageSection>
      </Showcase>
    </Layout>
  )
}

export const query = graphql`
  {
    contact: file(relativePath: { eq: "contact-us.jpeg" }) {
      childImageSharp {
        fluid(jpegQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage
