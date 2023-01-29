import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    <a href="https://www.linkedin.com/in/deepak-kumar-bind-1a9927239/" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/deepakbind" target="_blank"><FaGithub/></a>
    <a href="https://leetcode.com/deepakbind9695/" target="_blank"><SiLeetcode/></a>
    <a href="https://auth.geeksforgeeks.org/user/csexper" target="_blank"><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials
