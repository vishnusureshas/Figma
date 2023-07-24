import React from 'react'
import './About.css'
import luminar from '../../../assets/lumi.jpg'

function About() {
  return (
    <div className='container'>
    <div className='about-us-container'>
        <div className='team-members'>
            <h2>Our Team</h2>
            <div className='member-card'>
                <img src= {luminar} className='member-image' alt=''/>
                <h3 className='member-name'>Rahul M Kumar</h3>
                <p className='member-role'>Co-founder</p>
            </div>
        </div>
        <div className='about-us-description'>
            <h2 className='about-us-heading'>About Us</h2>
            <p>
                With the passion for empowering learners of all ages,misson is to make education accessible,engaging,and persionalized through our cutting-edge educational technology platform
            </p>
        </div>
    </div>
</div>
  )
}

export default About
