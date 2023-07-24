import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Discounts.css'

function Discounts() {

    const discounts = [
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfu_Q05PGlI_I4s-z19er9msEXMACTPPldDxt93qQJT-YuVg3f5bPNVWNCK5oQtpbuvDM&usqp=CAU',
            name:'Herbal Watch',
            content:'Matcha Tea Soap with Healing Properties',
            rate:'Rs.188'
        },
        {
            image:'https://cdn.shopify.com/s/files/1/0722/6028/8813/products/cinnamon-mint-front-view.png?v=1675875026&width=533',
            name:'Natural Masons',
            content:'Natural Masons Tooth paste tabs',
            rate:'Rs.196'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhKzp9AGgTJ24CmUV2ovv27gcC1PdWvce7yA&usqp=CAU',
            name:'Wind Mill',
            content:'Wind mill baby natural laundery detergent',
            rate:'Rs.250'
        },
        {
            image:'https://www.jiomart.com/images/product/original/rvvqiis45z/solara-peacock-stainless-steel-hot-and-cold-insulated-water-bottle-650-ml-product-images-orvvqiis45z-p600004532-1-202303301802.jpg?im=Resize=(420,420)',
            name:'Peacock',
            content:'Peacock Travel steal water bottle',
            rate:'Rs.355'
        },
       {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpEnCdA6PN7hUGrrZrfUWRmBS7qxzpRkltQ&usqp=CAU',
        name:'The Wood',
        content:'Wooden phone stand with multi functions',
        rate:'Rs.325'
       }
    ]

  return (
    <Row>
        <h2 className='header'>Discounts for you</h2>

  {
    discounts.map((data) => (
        <Col>
        <Card style={{ width: '15rem',marginTop:'70px',marginLeft:'20px'}}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title style={{textAlign:'center'}}>{data.name}</Card.Title>
          <Card.Text style={{textAlign:'center'}}>
            {data.content}
          </Card.Text>
          <Card.Text style={{textAlign:'center'}}>
            {data.rate}
          </Card.Text>
        </Card.Body>
      </Card>
      </Col>
    
    ))
  }

    </Row>
  )
}

export default Discounts
