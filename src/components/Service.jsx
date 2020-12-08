import React from "react"
import Img from "gatsby-image"
import ServiceStyle from "./Service.module.scss"
import styled from "styled-components"

const ImageHolder = styled(Img)`
  height: 350px;
  width: 350px;
`

const Service = ({ direction, name, src }) => {
  let layout
  if (direction === "left") {
    layout = (
      <>
        <Image fluid={src} className={ServiceStyle.image} />
        <div className={ServiceStyle.textArea}>
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            blanditiis numquam ipsa! Earum at, distinctio in, consectetur vel
            molestias officia libero quidem, suscipit ut quae delectus eius
            praesentium quaerat nostrum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Possimus blanditiis numquam ipsa! Earum at,
            distinctio in, consectetur vel molestias officia libero quidem,
            suscipit ut quae delectus eius praesentium quaerat nostrum.
          </p>
        </div>
      </>
    )
  } else if (direction === "right") {
    layout = (
      <>
        <div>
          <h2>{name}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            blanditiis numquam ipsa! Earum at, distinctio in, consectetur vel
            molestias officia libero quidem, suscipit ut quae delectus eius
            praesentium quaerat nostrum. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Possimus blanditiis numquam ipsa! Earum at,
            distinctio in, consectetur vel molestias officia libero quidem,
            suscipit ut quae delectus eius praesentium quaerat nostrum.
          </p>
          <ImageHolder fluid={src} />
        </div>
      </>
    )
  }

  return <section className={ServiceStyle.service}>{layout}</section>
}

export default Service
