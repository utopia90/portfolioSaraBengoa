import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './Projects.styles.scss'
import experts from '../../styles/imgs/experts.jpg'
import pokemon from '../../styles/imgs/pokemon.jpg'
import monsters from '../../styles/imgs/monsters.jpg'


import eye from '../../styles/svg/eye.svg'
import github from '../../styles/svg/github.svg'



export default function Projects() {
  return (
    <>
      <SectionTitle sectionTitle={"Projects"}></SectionTitle>
      <div className="projects-container">


        <h3>I build <strong>interactive, accessible </strong>websites and products. Altough I can work with both back and front-end technologies, my favourite stack at the moment is <strong>React</strong>. You can see all my personal and educational projects in my <strong><a className="git-link" target="_blank" href="https://github.com/utopia90">Github</a></strong> .</h3>

        <div className="projects-container__display">
          <div className="projects-container__experts">
            <div className="projects-container__experts__block">
              <h1 className="project-title">Expert's Management Platform</h1>
              <div className="projects-container__icons">
                <a target="_blank" href="https://www.experts-page-front-5df2mv8xw-utopia90.vercel.app">
                <img className="projects-container__icons__img" src={eye}/></a> 
                <a target="_blank" href="https://github.com/utopia90/finalproject-front"><img className="projects-container__icons__img" src={github}></img></a>
                </div>

                <p className='projects-container__txt'>For my final project in the <strong>Angular and Java master’s degree program</strong>, I developed this full-stack <strong>Expert's Management Platform</strong>. This platform allows users to register experts in various subjects, along with their availability schedules, and to modify or delete any expert from the database as needed.

                The technologies I used for this project are: <strong>Angular, Java, Spring Boot, and Mysql.</strong></p>
            </div>
            <div className="projects-container__experts__block">
              <img className="projects-container__experts__img" src={experts} />
            </div>

            
          </div>

          <div className="projects-container__experts">
                <div className="projects-container__experts__block">
                    <img className="projects-container__experts__img-pokemon" src={pokemon} />
                </div>

                <div className="projects-container__experts__block">
                  <h1 className="project-title">The PokeApi Website </h1>
                  <div className="projects-container__icons">
                    <a target="_blank" href="https://the-poke-api-project.vercel.app/">
                    <img className="projects-container__icons__img" src={eye}/></a> 
                    <a target="_blank" href="https://github.com/utopia90/ThePokeApiProject"><img className="projects-container__icons__img" src={github}></img></a>
                    </div>

                    <p className='projects-container__txt'>
                    This project is a web application that allows you to explore the world of <strong>Pokemon</strong>  using the Pokemon API. You can browse through a gallery of all the Pokemon and see their names, types, and images. <br/> You can also click on any Pokemon card to see more details, such as their stats, abilities, and evolutions.

                    <br/>I created this project using <strong>React,SASS,react context, hooks</strong>


                    </p>
                </div>
          </div>
          <div className="projects-container__experts">
             

                <div className="projects-container__experts__block">
                  <h1 className="project-title">Freak Monster's Memory Game</h1>
                  <div className="projects-container__icons">
                    <a target="_blank" href="https://utopia90.github.io/memoryGame/">
                    <img className="projects-container__icons__img" src={eye}/></a> 
                    <a target="_blank" href="https://github.com/utopia90/memoryGame"><img className="projects-container__icons__img" src={github}></img></a>
                    </div>

                    <p className='projects-container__txt'>
                    This is a fun and challenging version of the popular <strong>memory game</strong> of matching pairs, but this time you have to find and connect the pairs of cute and quirky <strong>monsters</strong> that are hiding behind the cards. But be quick, because you have a timer to test your memory skills. This game is made with <strong>React</strong> and <strong>styled components</strong>, and it is suitable for all ages and levels of difficulty. <strong>Can you remember all the freaky monsters and beat the clock?</strong>
                    </p>
                </div>
                <div className="projects-container__experts__block">
                    <img className="projects-container__experts__img-monster" src={monsters} />
                </div>
          </div>
        </div>
      </div>
    </>
  )
}
