import React from "react"
// import "../styles/QuoteFormStyles"


export default class QuoteForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = { status: "" }
  }

  render() {
    const { status } = this.state
    return (
      <div className="hca-wrapper">
       {!this.props.hideTitle && (
          <div className="text-center quote-text pb-3">
            <h3 className="h2 fw-600 mt-2">{this.props.title || "Receive A Free Quote"}</h3>
          </div>
        )}
        <form
          className="hca-form"
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mleppppp"
          method="POST"
        >
          <input className="hca-input" type="text" name="first_name" placeholder="Name:" required />
          <input className="hca-input" type="text" name="phone" placeholder="Phone:" />
          <input className="hca-input" type="text" name="suburb" placeholder="Suburb:" required />
          <input className="hca-input" type="email" name="email" placeholder="Email:" required />
          <textarea className="hca-input hca-textarea" name="message" placeholder="Message:" required />

          {status === "SUCCESS" ? (
            <p className="hca-status hca-success">Message sent successfully!</p>
          ) : (
            <button className="btn-- btn-primary-- w-100" type="submit">Submit</button>
          )}
          {status === "ERROR" && <p className="hca-status hca-error">Error. Please try again.</p>}
        </form>
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