import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Category.css'

function Category() {
    const details = [
        {
            image:'https://elle.in/wp-content/uploads/2022/09/festive-beauty-31.jpg',
            name:'Bath & Body'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8JCofEilxjsnpo1pP289Xmtm4uUqcpDXsd3RYD_tgqRPX6afyiIsJHH2kIGs9hV2d-o&usqp=CAU',
            name:'Grocery Bags'          
        },
        {
            image:'https://assets.epicurious.com/photos/63cec86849e8e01f44f25b56/16:9/w_2560%2Cc_limit/xx-products-spring-cleaning_HERO_041122_6935_VOG_Badge_final.jpg',
            name:'Kitchen & Cleaning'
        },
        {
          image:'https://lh3.googleusercontent.com/p/AF1QipMFV80tzlsBWOgff6WEYlGz-xEVZGFRGysy-Y0z=w1080-h608-p-no-v0',
          name:'Beauty saloon'
        }
    ]

    const handleData = () => {
      window.open('https://www.youtube.com/@FluxAcademy','_blank')
    }
  return (
    <>
    <Row>
      <h2 className='heading'>Shop by categories</h2>
      {
        details.map((item) => (
          <Col>
          <Card className='mb-3' style={{width:'20rem'}}>
          <Card.Img variant="top"  src={item.image} style={{borderRadius:'20px'}}/>
          <Card.Body>
            <Card.Title style={{textAlign:'center',marginBottom:'20px',fontWeight:'bolder'}}>{item.name}</Card.Title>
          </Card.Body>
        </Card>
        </Col>
        ))
      }
    </Row>

    <div className='title'>
        <h3>Every choice counts:Protect the</h3>
        <h3>environment starts with us</h3>
    </div>

    <div className='paragraph'>
         <p>As individuals,we all have the power to make changes to protect the environment by reducing</p>
         <p>the use of plastic and choosong eco-friendly products.your actions can save earth's resourses</p>
         <p>and provide a better world for future generations</p>
         <button className='para-btn' onClick={handleData}>Learn More</button>
    </div>

    </>
  )
}

export default Category
