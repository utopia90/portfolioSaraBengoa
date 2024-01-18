import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import './AboutMe.styles.scss'
import itGirl from '../../styles/imgs/it_girl.png'
import travelling from '../../styles/imgs/traveling.png'


export default function AboutMe() {
  return (
    <>
    <SectionTitle sectionTitle={"About Me"}></SectionTitle>

    <div className='about-container'>
   <div className="txt-container">
    <p >My name is <span className='enhanced-text'>Sara</span>, and I'm a front-end developer with a passion for creating innovative and user-friendly applications. I started teaching myself how to code four years ago, and I immediately fell in love with the logical and creative sides of programming. <br/> Since then, I've been on a mission to learn as much as I can about software development and to use my skills to make a <span className='enhanced-text'>positive impact on the world</span> .

After a year of studying software development on my own, I decided to take my skills to the next level by collaborating on open source projects with teams of developers from all over the world.  <br/> Through my work with the <a href="https://www.chingu.io" target="_blank" className='enhanced-text'>Chingu organization</a>, I gained valuable experience working on real-world projects and honed my collaboration and communication skills.

<br/> From there, I enrolled in the <a href="https://www.upgrade-hub.com" target="_blank"  className='enhanced-text'>Upgrade Hub bootcamp</a>, where I spent three intensive months studying both front-end and back-end technologies. During this time, I learned how to build complex applications from scratch, how to work with databases and APIs, and how to optimize code for performance and scalability.

Since completing the bootcamp, I've had the opportunity to work with <span className='enhanced-text'>a variety of companies</span>, each with their own unique challenges and opportunities. Through these experiences, I've gained a deep understanding of what it takes to build successful applications that meet the needs of both users and stakeholders.
</p>

<br/>
<p>Beyond coding, <span className='enhanced-text'> I have a passion for exploring the world and learning  new things</span>. I love traveling and I have done a backpacking trip through  <span className='enhanced-text'>Asia</span>, where I visited amazing places like Thailand, Russia, Cambodia, Japan, China and Myanmar. I enjoyed experiencing different cultures, landscapes, and cuisines and wrote about it in my <a target="_blank" href="https://sindromedemarcopolo.wordpress.com" className="enhanced-text">blog</a>. I also like to try new types of food, from spicy curries to exotic fruits. I am always open to new flavors and sensations.

One of the ways I like to meet new people and practice my language skills is by participating in <span className="enhanced-text">language exchanges</span>. I think it is a great opportunity to learn from each other and make friends from different backgrounds. I speak Spanish, English, and a little bit of French, and I am interested in learning more languages in the future.

I consider myself a lifelong learner, and I have a wide range of interests that go from <span className="enhanced-text">finances, trading, SEO, to general culture</span> . I like to keep myself updated on the latest trends and developments in these fields, and I enjoy honing my logical and problem solving skills in platforms like <a target="_blank" href="https://www.codewars.com/users/utopia90" className='enhanced-text'>Codewars</a>

</p>

</div>
<div className="right-img-container">
  <img src={itGirl}/>
<img src={travelling}/>
</div>
    </div>
    </>
  )
}
