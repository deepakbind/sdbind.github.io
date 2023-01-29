import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { RiFoldersLine } from 'react-icons/ri'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__contact">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <RiFoldersLine className='about__icon' />
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>
            I am medium level coder and Developer.Beside having to look a part and full time career in Developer and Software Engineering .We loves to
            solve programming problems in most efficient  ways.I do my work mainly in C++ and Full Stack Developer.C++ and Data Structure & Algorithms,Object Oriented Programming,HTML,CSS,Java Script(JS),React Js,Bootstrap,Node Js ,Express Js,MangoDB,Rest API,JQuery are my the
            stronger section.Besides these I know DBMS and Database as well.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About