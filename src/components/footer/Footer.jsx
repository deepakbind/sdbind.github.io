import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
   <footer>
   <a href='#' className='footer__logo'>Deepak kumar Bind</a>

   <ul className='permalinks'>
   <li><a href='#'>Home</a></li>
   <li><a href='#about'>About</a></li>
   <li><a href='#experience'>Experience</a></li>
   <li><a href='#services'>Services</a></li>
   <li><a href='#portfolio'>Portfolio</a></li>
   <li><a href='#testimonials'>Testimonials</a></li>
   <li><a href='#contact'>Contact</a></li>
   </ul>

   <div className="footer__socials">
   <a href ="https://www.facebook.com/profile.php?id=100071964353241"><BsFacebook/></a>
   <a href="https://www.instagram.com/d.e.e.p.a.k__37/"><BsInstagram/></a>
   <a href="https://twitter.com/rdbind9695"><BsTwitter/></a>
   </div>

   <div className="copyright">
   <small>&copy;2023 Made by Deepak Kumar Bind.All rights reserved</small>
   </div>
   </footer>
  )
}

export default Footer