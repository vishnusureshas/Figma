import React from 'react'
import './SpecialCollection.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function SpecialCollection() {
    const items = [
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrPbEfBIDL2mZbhlQxD4pUvYDqeVymqvAxeQ&usqp=CAU',
            name:'Stojo',
            content:'Collapsible coffee Travel cup',
            rating:'Rs.2563'
        },
        {
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwEExPmryWprFbpJsHNzdDH2MKJkeMXcRwS-cMljUPlqJoCM3macKH1AIw8tlURBoK-o&usqp=CAU',
            name:'Beco',
            content:'Beco cotton buds with cotton stick',
            rating:'Rs.375'
        },
        {
            image:'https://www.dotsanddoodles.in/cdn/shop/products/Vanilla_1200x1200.jpg?v=1664351053',
            name:'Puremazing',
            content:'Pureamazing Sweet vanila soy jar Candle',
            rating:'Rs.199'
        },
        {
            image:'https://m.media-amazon.com/images/I/71sTzF2PlTL._AC_UF1000,1000_QL80_.jpg',
            name:'Nobbys',
            content:'Nobbys seagrass Natural tissue box',
            rating:'Rs.749'
        },
        {
            image:'https://m.media-amazon.com/images/I/7128TDNelJL.jpg',
            name:'Vitro Naturals',
            content:'Vitro Naturals Floor cleaner',
            rating:'Rs.350'
        }
    ]
  return (
    <Row>
        <h2 className='header'>Special Collections</h2>
       
        {
            items.map((data) => (
              <Col  >
                <Card className='p-3' style={{ width:'15rem',marginTop:'40px',marginLeft:'20px'}}>
                <Card.Img variant="top" src={data.image} />
             <Card.Body>
                  <Card.Title style={{textAlign:'center',}}>{data.name}</Card.Title>
                  <Card.Text>
                    {data.content}
                  </Card.Text>
                  <Card.Text style={{textAlign:'center',fontWeight:'bolder'}}>
                    {data.rating}
                  </Card.Text>
                </Card.Body>
             </Card>
             </Col>
            ))
        }
  
    </Row>
  )
}

export default SpecialCollection
