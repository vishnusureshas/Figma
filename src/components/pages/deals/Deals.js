import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Deals() {

    const details = [{
        image:'https://img.freepik.com/free-photo/care-products-plants-arrangement_23-2149879994.jpg?w=2000',
        name:'Body Care',
        rate:'Min.60% off'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSkV-k4jUS1QJ-eNt1BXdgQ-NUJk-zGSPjoA&usqp=CAU',
        name:'Classic note book',
        rate:'Min.60% off'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3hHx7XqK5u3fcWXBLHktKlksUuKOhtLSFHaPXP_wKzAv7l6qoHg_SedJyTWlL3eldlw&usqp=CAU',
        name:'Coffee mug',
        rate:'Min.60% off'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEH7wj0jM-LoqkSq5rTd6Y9fDGbqLaxH8GgzcOQqmnHUcE0gQAgwU5Hu4hN_fsS7copEY&usqp=CAU',
        name:"Mouse pad",
        rate:'Min.60% off'
    }
]
  return (
    <>
    <h2 className='title' >Deal of the Day</h2>
    <Row>   
        { 
            details.map((item)=> (              
            <Col>
              <Card style={{ width: '15rem',backgroundColor:'silver',marginTop:'40px',marginLeft:'60px' }}>
                <Card.Img variant="top" src={item.image} style={{borderRadius:'10px'}}/>
                <Card.Body>
                  <Card.Title style={{textAlign:'center'}}>{item.name}</Card.Title>
                  <Card.Text style={{textAlign:'center' ,fontWeight:'bolder'}}>
                    {item.rate}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            ))
        }
    </Row>
    </>
  )
}

export default Deals


