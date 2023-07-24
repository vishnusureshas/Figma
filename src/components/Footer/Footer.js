import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
         <div className='container'>
            <div className='footer_wrapper'>
               <div className='footer-box'>
                 <h2>Green Box</h2>
                 <label htmlFor='' className='lg'>Subscribe To Our Email</label><br/>
                 <input type='email' placeholder='Email' />
               </div>

               <div className='footer-box'>
                <h4 className='footer-title'>Green Box</h4>
                <ul className='footer-links'>
                    <li>
                       <Link to='/'>Home</Link> 
                    </li>
                    <li>
                      <Link to=''>About</Link>  
                    </li>
                    <li>
                      <Link to='/categories'>Categories</Link> 
                    </li>
                    <li>
                      <Link to='/specialization'>Services</Link> 
                    </li>
                </ul>
               </div>

               <div className='footer-box'>
                    <h4 className='footer-title'>Policies</h4>
                    <ul className='footer-links'>
                       <li>
                        Terms of use
                       </li>
                       <li>
                        Privacy Policy
                       </li>
                       <li>
                         Return Policy
                       </li>
                       <li>
                         Site Map
                       </li>
                    </ul>
               </div>

               <div className='footer-box'>
                <h4 className='footer-title'>Useful link</h4>
                <ul className='footer-links'>
                    <li>
                        Payment Method
                    </li>
                    <li>
                       Location we ship to
                    </li>
                    <li>
                       Estimate delivery time
                    </li>
                    <li>
                       Blogs
                    </li>
                </ul>

               </div>

            </div>
         </div>
    </footer>
  )
}

export default Footer