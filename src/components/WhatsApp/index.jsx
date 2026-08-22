import React from 'react'

import { FaWhatsapp } from "react-icons/fa";
import './insdex.scss'


const WhatsApp = () => {

const whatsNumber = "918295669607"; // Replace with your WhatsApp number

const message= encodeURIComponent("Hi Yash! I came across your portfolio and would like to connect with you.");

const whatsAppLink = `https://wa.me/${whatsNumber}?text=${message}`;


  return (
    <a
    href={whatsAppLink}
    target="_blank"
    rel="noopener noreferrer"
      aria-label="Chat with Yash on WhatsApp"
      className='whatsapp-button'

    
    >
      <span className='whatsapp-icon' ><FaWhatsapp size={30} radius={100} /></span>
      {/* <span className='whatsapp-text' >WhatsApp</span> */}

    </a>
  )
}

export default WhatsApp