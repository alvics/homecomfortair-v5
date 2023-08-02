import React from "react"
import StaticImage from "../components/StaticQueryImages"
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

    return (
      <div
        className="modal fade"
        id="serviceModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
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

            <div className="m-auto my-3">
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
                  *Service Form
                </span>
              </div>
            </div>

            <div className="modal-body">
              <br />
              <p className="font-italic">
                We'll contact you within 24 hours to confirm details.
              </p>
              <div className="form-bc">
                <form
                  className="grid-300 job-order-form"
                  onSubmit={this.submitForm}
                  action="https://formspree.io/mleppppp"
                  method="POST"
                >
                  <input
                    type="text"
                    name="first_name"
                    required
                    placeholder="Name:"
                  />
                  <input type="text" name="phone" placeholder="Phone:" />
                  <input
                    type="text"
                    name="suburb"
                    required
                    placeholder="Suburb:"
                  />
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
                      back to you shortly..
                    </p>
                  ) : (
                    <div>
                      <button className="btn-- btn-orange--">
                        Service Request
                      </button>
                      <div className="text-dark mt-2 lh-sm" style={{ fontSize: 12 }}>
                        <small>
                          *If you have any questions or concerns, don't hesitate to reach out to us through our live chat feature on our website. Our team of experts is available to provide you with fast, accurate information and help you schedule an appointment or service call. We are happy to assist you any time you need it.
                          <br />
                          *Please note when submitting a form we do not share
                          your details with any third party, and we'll not spam
                          your inbox.
                        </small>
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
            </div>
            <div className="py-2 bg-light hca-logo-modal-footer">
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