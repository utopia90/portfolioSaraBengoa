import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/Navbar.js'
import FlyoutMenu from '.././components/FlyoutMenu/FlyoutMenu.js'
import './Homepage.styles.scss'
import Projects from './Projects/Projects.js'
import Work from './Work.js'
import HomePageSquare from './components/HomePageSquare/HomePageSquare.js'
import AboutMe from './AboutMe/AboutMe.js'
import HireMe from './HireMe/HireMe.js'
import useMobile from '../hooks/useMobile.js'







export default function Homepage() {
  const [flyoutMenuActive, setFlyoutMenuActive] = useState(false)
  const [screenToShow, setScreenToShow] = useState('')
  const {isMobile} = useMobile()


  function handleMenu(){
    setFlyoutMenuActive(!flyoutMenuActive)
    setScreenToShow('')
  }
  function handleScreenToShow(screenName){
    setScreenToShow(screenName)
    setFlyoutMenuActive(false)

  }
 

  function getScreenToShow(){
    if(screenToShow.length > 0){
    const screensToShow = {
      "home": <HomePageSquare/>,
      "work": <Work/>,
      "projects": <Projects/>,
      "about": <AboutMe/>,
      "hireMe" : <HireMe/>,
    }
    return screensToShow[screenToShow] 
  }
  }

  const showHomePageOrSubPage = screenToShow.length > 0 ? getScreenToShow(): <HomePageSquare/>
  const shouldShowNavbar = !(isMobile && screenToShow.length === 0 && flyoutMenuActive)
  return (
    <main>
    {shouldShowNavbar && <NavBar onClick={handleMenu } subpageActive={flyoutMenuActive === false} onHireMeClick={handleScreenToShow} />}

      {flyoutMenuActive ?
        <FlyoutMenu screenToShow={handleScreenToShow} /> : showHomePageOrSubPage
         
      }
    </main>
  )

}
