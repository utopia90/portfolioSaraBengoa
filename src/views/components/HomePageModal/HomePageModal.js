import React from 'react'
import CvEnglish from '../../../styles/docs/CV_English.pdf'
import CvSpanish from './../../../styles/docs/CV_Spanish.pdf'
import {Modal} from '../../../components/Modal/Modal'

export default function HomePageModal({showModal, handleModal}) {
  return (
    <div className="modal-container">
  <Modal show={showModal} handleClose={handleModal}>
    <div className="cv-container">
      <h3>Please choose the language in which you want to download my resume</h3>
      <div className="cv-container__lng"><a href={CvEnglish}>ENGLISH</a><a href={CvSpanish}>SPANISH</a></div>
    </div>
  </Modal>
</div>
  )
}
