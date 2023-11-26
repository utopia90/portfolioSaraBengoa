import React, {useState, useEffect} from 'react'
import '../.././Homepage.styles.scss';
import menuLogo from '../../../styles/svg/menu.svg'
import bubble from '../../../styles/svg/bubble.svg'


export default function NavBar({onClick, subpageActive, onHireMeClick}) {
  const [isHireMeActive, setIsHireMeActive] = useState(true)
 
function handleMenu(){
  setIsHireMeActive(true)
  onClick()
}
function handleHireMe(){
  onHireMeClick('hireMe')
  setIsHireMeActive(false)
}
    useEffect(() => {
      if(isHireMeActive){
        setIsHireMeActive(true)

      }
    }, [subpageActive])
  return (
    <main>
        <div className="main-nav">
              <div className="main-nav__left">
              <img className="main-nav__logo" src={menuLogo}/>
              <span className="main-nav__logo-txt" onClick={handleMenu}>{ subpageActive ? 'MENU' : 'CLOSE' }</span>
              
              </div>{isHireMeActive && <div className="main-nav__right">
                <img className="main-nav__right__logo" src={bubble}/>
                <span className="main-nav__logo-txt" onClick={handleHireMe}>HIRE ME</span>
            </div>}
         </div>
    </main>
  )
}
