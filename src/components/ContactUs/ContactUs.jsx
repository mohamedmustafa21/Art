import React from 'react'
import './contactus.css'

function ContactUs() {
  return (
  <div className='contact-section'>
    <div className="contain-contact">
        <div className="information-user p-5 text-start">
            <h3 className='title-contact'>Stay In Touch</h3>
            <div className='text-white'>
                <p>+ 4 (678) 8723578</p>
                <p>New Yourk - NY City</p>
                <p>Mohamedmeda023@gmail.com</p>
            </div>
            <div className="icons text-white">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className='mt-3 user'>
                <input className='input-user' placeholder=' Enter Your Email' type="text" />
            </div>
            <button className='mt-3 btn-contact btn btn-info'>Sent</button>

        </div>
        <div className="map-img">

        </div>
    </div>
    <div className="copyright">
        <h5 className='text-center text-muted mt-2'>Copyright © 2022 Muhamed Mustafa</h5>
    </div>
  </div>
  )
}

export default ContactUs