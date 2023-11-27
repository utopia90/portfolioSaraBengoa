import React from 'react'
import './FlyoutMenu.styles.scss'
import { useState } from 'react'
import { Modal } from '../Modal/Modal'
import CvEnglish from '../../styles/docs/CV_English.pdf'
import CvSpanish from '../../styles/docs/CV_Spanish.pdf'
import github from '../../styles/svg/github.svg'
import facebook from '../../styles/svg/facebook.svg'
import instagram from '../../styles/svg/instagram.svg'
import linkedln from '../../styles/svg/linkedln.svg'
import codewars from '../../styles/svg/codewars.svg'
import email from '../../styles/svg/email.svg'







export default function FlyoutMenu({ screenToShow }) {
  const [showModal, setShowModal] = useState(false)


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
        <div className="flyout-menu__item" onClick={() => setShowModal(!showModal)}>Curriculum</div>
      </div>
      <div className="modal-container">{showModal &&
        <Modal show={showModal} handleClose={() => setShowModal(false)}>
          <div className="cv-container">
            <h3>Please choose the language in which you want to download my resume</h3>
            <div className="cv-container__lng"><a href={CvEnglish}>ENGLISH</a><a href={CvSpanish}>SPANISH</a></div>
          </div>
        </Modal>}
      </div>
    </div>
  )
}
