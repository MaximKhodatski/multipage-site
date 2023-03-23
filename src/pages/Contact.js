import { useLocation } from 'react-router-dom'
import React from 'react'

export default function Contact() {
  const queryString = useLocation().search
  console.log(queryString)

  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get("name")


  return (
    <div>
        <h2>Hey {name}, Contact us here...</h2>
        <p>For more detailed information,
        contact the phone number or write to the e-mail address.</p>
    </div>
  )
}
