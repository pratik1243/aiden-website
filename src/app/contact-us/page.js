import React from 'react'
import dynamic from 'next/dynamic';
const Contact = dynamic(() => import("../../pageComponents/Contact"));

const ContactPage = () => {
  return (
    <Contact />
  )
}

export default ContactPage