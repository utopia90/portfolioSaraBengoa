import React from 'react'
import './HireMe.scss'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import CvEnglish from '../../styles/docs/CV_English.pdf'
import CvSpanish from '../../styles/docs/CV_Spanish.pdf'
import hire from '../../styles/imgs/hire.png'



export default function HireMe() {
  return (
    <div className="hireme-section">
              <SectionTitle sectionTitle={"Hire Me"}></SectionTitle>

    <section className='hireme-container'>
      <div className='hireme-container__left'>
          <h3>Let's start a beautiful relationship!</h3>
          <p> <a href={CvEnglish}><strong>Here</strong></a> it is my English CV and <a href={CvSpanish}><strong>Here</strong></a>  my Spanish CV.</p>
          <p>You can contact me at any time from 4 p.m. Monday through Friday. My contact details are:</p>
          
          <div className='contact-details'>
          <span><strong>TLF:</strong><div>+ 34 644328611</div></span>
          <span> <strong>EMAIL:</strong> <div>sarabengoar@gmail.com</div></span>
          </div>
        </div>
        
          <section>
            <img src={hire}/>
          </section>
      </section>

    </div>
  )
}
