import React from 'react'
import './Content.css';

function Content() {
    const handleSubject = () => {
        window.open('https://www..youtube.com/@FluxAcademy','_blank')
    }
  return (
    <div className='container'>
        <div className='content'>
            <h2 className='para'> Green Box's choice over other</h2>
            <h2 className='para'>eco-friendly product sites.</h2>       
        </div>
        <button className='learn-btn' onClick={handleSubject}>Learn More</button>   
    </div>
  )
}

export default Content