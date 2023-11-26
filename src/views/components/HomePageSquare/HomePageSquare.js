import React, {useState} from 'react'
import '../.././Homepage.styles.scss';
import hair from '../../../styles/svg/hair.svg'
import nose from '../../../styles/svg/nose.svg'
import eyes from '../../../styles/svg/eyes.svg'
import sunrise from '../../../styles/svg/sunrise.svg'
import eyebrow from '../../../styles/svg/eyebrow.svg'



export default function HomePageSquare() {
    const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
  
    const firstNX = +String(cursorPosition.left).charAt(0)
    const firstNY = +String(cursorPosition.top).charAt(0)
  
    const x = firstNX === 0 ? firstNX === 0 : firstNX === 1 ? firstNX + 2 : firstNX - 12
    const y = firstNY === 1 ? firstNY + 6 : firstNY - 2
  
  
  
  
    const eyeStyles = {
      position: 'absolute',
      color: 'white',
      bottom: '2.2rem',
      left: '2.2rem',
      transform: `translate(${x}px, ${y}px)`
    }
    const eyeBrowStyles = {
      width: '5rem',
      position: 'absolute',
      bottom: '2.4rem',
      transform: `translate(${x}px, ${y}px)`
    }
  
    const onMouseMove = e =>
      setCursorPosition({ top: e.screenY, left: e.screenX });
   
  
    return (
      
  
        <div className="home_container">
  
          <section className="left_side">
            <div className="left_side__title">
              Hi, my
              name is <strong>Sara</strong><span className="dot">.</span>
            </div>
            <span className="left_side__subtitle">
              I'm a <strong>front-end developer</strong> from Málaga, Spain.
            </span>
          </section>
  
          <section className="right_side" onMouseMove={onMouseMove} >
            <div className="right_side__bg"/>
  
            <div className="right_side__img-container">
  
              <img src={hair} alt="sara-hair" className='right_side__img-container__hair'></img>
              <div className="right_side__eyes-container">
                <div><img style={eyeBrowStyles} className="right_side__img-container__eyebrow" src={eyebrow} alt="sara-eyebrow" /><img src={eyes} alt="sara-eyes" className='right_side__img-container__eyes' /><span style={eyeStyles}>•</span></div>
                <div><img style={eyeBrowStyles} className="right_side__img-container__eyebrow" src={eyebrow} alt="sara-eyebrow" /><img src={eyes} alt="sara-eyes" className='right_side__img-container__eyes' /><span style={eyeStyles}>•</span></div>
              </div>
              <img src={nose} alt="sara-nose" className='right_side__img-container__nose'></img>
              <img src={sunrise} alt="sara-sunrise" className='right_side__img-container__sunrise'></img>
  
  
            </div>
          </section>
        </div>
    )
  
}
