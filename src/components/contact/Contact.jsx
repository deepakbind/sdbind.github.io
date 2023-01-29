import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qn0yxx7', 'template_4bp4y0s', form.current, 'rHrMqVWO8v7-waua4')
    e.target.reset()
  };
  return (
    <section id='Contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
    <div className="contact__options">
    <article className="contact__option">
    <MdOutlineEmail className='contact__option-icon'/>
    <h4>Email</h4>
    <h5>deepakbind9695@gmail.com</h5>
    <a href="mailto:deepakbind9695@gmail.com" target="_blank">Send a message</a>
    </article>
    <article className="contact__option">
    <BsFacebook className='contact__option-icon'/>
    <h4>Messenger</h4>
    <h5>facebook</h5>
    <a href="https://www.facebook.com/profile.php?id=100071964353241" target="_blank">Send a message</a>
    </article>
    <article className="contact__option">
    <BsWhatsapp className='contact__option-icon'/>
    <h4>WhatsApp</h4>
    <h5>8765065525</h5>
    <a href="https://api.whatsapp.com/send?8765065525" target="_blank">Send a message</a>
    </article>
    </div>
     {/*END OF CONTACT OPTION*/}
     <form ref= {form} onSubmit = {sendEmail}>
     <input type="text" name='name' placeholder='Your Full Name' required/>
     <input type="email" name='email' placeholder='Your Email' required/>
     <textarea name="message" rows="7" placeholder='Your Message'></textarea>
     <button type='submit' className='btn btn-primary'>Send Message</button>
     </form>
    </div>
    </section>
  )
}

export default Contact