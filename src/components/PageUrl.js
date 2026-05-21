import React, { useRef, useEffect } from "react"

const PageURL = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) ref.current.value = window.location.pathname
  }, [])

  return (
    <input
      type="text"
      name="page"
      ref={ref}
      readOnly
      style={{ display: "none" }}
      aria-hidden="true"
    />
  )
}

export default PageURL