import React from 'react'
import './Home.css'
import as  from '../../../assets/png2.jpg'
import Details from '../Details/Details'
import green  from '../../../assets/green.png';
import Product from '../Products/Product';
import Content from '../Content/Content';
import Recommentation from '../Recomment/Recommentation';
import Category from '../categories/Category';
import SpecialCollection from '../specialcollections/SpecialCollection';
import Discounts from '../discounts/Discounts';
import Deals from '../deals/Deals';
import NewCollection from '../collections/NewCollection';
import Imageing from '../image/Imageing';
import Data from '../eco-friendly/Data';
import FinalContent from '../finalcontent/FinalContent';
import green2 from '../../../assets/green2.png'


function Home() {

  const handleClick = () => {
    window.open('https://www.youtube.com/@FluxAcademy','_blank')
  }
  return (
    <>
    <section>
        <div className='container'>
            <div className='home-container'>
                <div className='home-content'>
                   <h1 className='section-title'>ZERO WASTE</h1>
                  
                   <h1 className='section-title'>LIVING</h1>
                   <h5 className='section-para'>For the Eco Friendly future</h5>

                   <div className='colors-name'>
                      <img src= {green2} alt='' />
                   </div>
                  
                <div className='home-btns'>
                  <button className='register-btn1' onClick={handleClick}>How to order</button>
                  <button className='register-btn2' onClick={handleClick}>See Categories</button>
                </div>
                </div>
                <div className='color'>
                <img src={green} alt=''/>
                </div>
               
                <div className='home-img'>
                   <div className='home-img-wrapper'>
                     <div className='box-01'>
                       <div className='box-imges'>
                          <img src={as} alt=''/>
                       </div>
                     </div>
                   </div>
                </div>            
            </div>
        </div>
    </section>
    <Details/>
    <Product/>
    <Content/>
    <Category/>
    <Recommentation/>
    <SpecialCollection/>
    <Discounts/>
    <Deals/>
    <NewCollection/>
    <Imageing/>
    <Data/>
    <FinalContent/>  
    </>

  )
}

export default Home