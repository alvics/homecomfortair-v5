import React from "react"
import StaticImage from "../components/StaticQueryImages"
import PageURL from "../components/PageUrl"

// import OrderForm from "./OrderForm"
// import ProductTemplate from "../templates/product-template"

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)

    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state

    /* const queryString = window.location.href
      .replace(/(^\w+:|^)\/\//, "")
      .split("localhost:8000/products/")
      .join("") */

    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content enquiry-form">
            <div className="modal-footer bg-light top-form border mx-0">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-header">
              <div className="m-auto">
                {" "}
                <div
                  className="h6 modal-title text-dark cap fw-600"
                  id="exampleModalLabel"
                >
                  <div className="my-3">
                    <StaticImage
                      filename="Home-Comfort-Air-logo-650.png"
                      alt="home comfort avatar logo"
                    />
                  </div>

                  <span style={{ fontSize: 20 }} className="mt-3">
                    *Air Conditioning Installation
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <br />
              <p
                style={{ marginTop: `-25px`, paddingBottom: 15 }}
                className="font-italic border-bottom mb-4"
              >
                Complete our form and we'll return to you by email or phone.
              </p>

              <form
                className="grid-300 job-order-form"
                onSubmit={this.submitForm}
                action="https://formspree.io/mleppppp"
                method="POST"
              >
                <PageURL />
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="Name:"
                />
                <input type="text" name="phone" required placeholder="Phone:" />
                <input type="text" name="suburb" placeholder="Suburb:" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email:"
                />
                <textarea
                  rows="4"
                  cols="20"
                  name="message"
                  required
                  placeholder="Message:"
                />
                {status === "SUCCESS" ? (
                  <p className="bg-info text-white p-1 rounded">
                    Thank you, your form was successfully submitted, we'll get
                    back to you shortly.
                  </p>
                ) : (
                  <div>
                    <button className="btn-- btn-orange-- mb-3">
                      Send Enquiry
                    </button>
                    <div className="text-dark mt-2" style={{ fontSize: 12 }}>
                      *Please note when sending an enquiry we do not share your
                      details with any third party, and we'll not spam your
                      inbox.{" "}
                    </div>
                  </div>
                )}
                {status === "ERROR" && (
                  <p className="bg-danger text-white p-1 rounded">
                    Ooops! There was an error.
                  </p>
                )}
              </form>
            </div>
            <div className="py-2 bg-light hca-logo-modal-footer pt-2">
              <StaticImage
                filename="Home-Comfort-Air-logo-650.png"
                alt="home comfort air logo"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}