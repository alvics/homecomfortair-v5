import React from "react"


const PageURL = () => {
  const url = typeof window !== "undefined" ? window.location.href : "" 

  return (
    <input
      style={{ fontSize: 13 }}
      type="text"
      data={url.toString().substring(29)}
      value={url.toString().substring(29)}
    />
  )
}

export default PageURL