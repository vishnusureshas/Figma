import React from 'react'
import './Recommentation.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Recommentation() {
    const items = [{
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMLwU-bX9kVdxU3El6wJzEuI8lA7d80qJZT1d-X4gtI0g4cezBOkhNZBfhJyitfXJKwSk&usqp=CAU',
        name:'Kids wear'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR7llpcEx46XKYxoXHkwhscaJGf6ZSyCXRtw&usqp=CAU',
        name:'Plant pots'
    },
    {
        image:'https://m.media-amazon.com/images/I/518e4DdqgWL.jpg',
        name:'Pillow Cusion Cover'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZPVFs_LSzeZXmRlyNEy_ytzy39oaNQWD_g&usqp=CAU',
        name:'Floor Cleaner'
    }
]
  return (
    <Row>
         <h2 className='content'>Recommented For You</h2>
        {          
            items.map((data)=> (
                <Col sm={12} md={8} lg={6} xl={3}>
                <Card style={{ width: '18rem',className:'m-3',marginTop:'30px',marginLeft:'20px'}}>
                <Card.Img variant="top" className='p-3 ' src={data.image} />
                <Card.Body>
                  <Card.Title style={{textAlign:'center',fontWeight:'bolder'}}>{data.name}</Card.Title>
                </Card.Body>
              </Card>
              </Col>
            ))
          
        }

    </Row>
  )
}

export default Recommentation