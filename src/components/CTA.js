import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Modal from "../components/InstantQuoteForm"
import ServiceModal from "../components/ServiceModal"

const CTA = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <div>
      <div className="col d-flex align-items-center">
        <div className="pb-3 m-auto CTA-btn text-white">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#serviceModal"
            style={{ fontSize: `0.8rem`, color:`white` }}
            className="btn-- btn-green--"
          >
            Book a Service
          </button>
          <ServiceModal />

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ fontSize: `0.8rem` }}
            className="btn-- btn-primary-- mt-md-2"
          >
            Instant Quote
          </button>

          <Modal />
        </div>
      </div>
    </div>
  )
}

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "homecomfort-2.jpg" }) {
      childImageSharp {
        fluid {
          src
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default CTA