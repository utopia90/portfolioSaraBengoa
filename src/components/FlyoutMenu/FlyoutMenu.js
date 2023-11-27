import React from 'react'
import './FlyoutMenu.styles.scss'


import github from '../../styles/svg/github.svg'
import facebook from '../../styles/svg/facebook.svg'
import instagram from '../../styles/svg/instagram.svg'
import linkedln from '../../styles/svg/linkedln.svg'
import codewars from '../../styles/svg/codewars.svg'
import email from '../../styles/svg/email.svg'







export default function FlyoutMenu({ screenToShow }) {


  function setScreenToShow(value) {
    screenToShow(value)
  }

  return (
    <div className='flyout-menu__container'>
      <div className="social-links">
        <a href='https://github.com/utopia90' target='_blank'><img src={github} /> </a>
        <a href="https://www.linkedin.com/in/sara-b-54b93543/" target='_blank'><img src={linkedln} /> </a>

        <a href="https://www.instagram.com/utopia905/" target='_blank'><img src={instagram} /> </a>
        <a href="https://www.facebook.com/sara.bengoa/" target='_blank'><img src={facebook} /> </a>
        <a href="https://www.codewars.com/users/utopia90" target='_blank'><img src={codewars} /> </a>
        <a href="mailto:sarabengoar@gmail.com"><img src={email} /> </a>
      </div>
      <div>
        <div className="flyout-menu__item" onClick={() => setScreenToShow('home')}>Home</div>
        <div className="flyout-menu__item" onClick={() => setScreenToShow('about')}>About</div>
        <div className="flyout-menu__item" onClick={() => setScreenToShow('projects')}>Projects</div>
        <div className="flyout-menu__item" onClick={() => setScreenToShow('curriculum')}>Curriculum</div>
      </div>
  
    </div>
  )
}
