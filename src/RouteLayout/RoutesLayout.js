import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import Home from '../components/pages/Home/Home'
import Details from '../components/pages/Details/Details';
import Product from '../components/pages/Products/Product';
import Category from '../components/pages/categories/Category';
import Recommentation from '../components/pages/Recomment/Recommentation';
import SpecialCollection from '../components/pages/specialcollections/SpecialCollection';
import Discounts from '../components/pages/discounts/Discounts';
import Deals from '../components/pages/deals/Deals';
import NewCollection from '../components/pages/collections/NewCollection';
import Imageing from '../components/pages/image/Imageing';
import Data from '../components/pages/eco-friendly/Data';
import FinalContent from '../components/pages/finalcontent/FinalContent';
import About from '../components/pages/aboutus/About';

function RoutesLayout() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/details' element ={<Details/>}/>
            <Route path='/product' element = {<Product/>} />
            <Route path='/categories' element = {<Category/>}/>
            <Route path ='/recommentation' element = {<Recommentation/>}/>
            <Route path='/specialization' element = {<SpecialCollection/>}/>
            <Route path='/discount' element={<Discounts/>}/>
            <Route path='/deals' element={<Deals/>}/>
            <Route path='/collections' element={<NewCollection/>}/>
            <Route path='/images' element={<Imageing/>}/>
            <Route path='/data' element={<Data/>}/>
            <Route path='/finalcontent' element={<FinalContent/>}/>
            <Route path='/aboutus' element={<About/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default RoutesLayout