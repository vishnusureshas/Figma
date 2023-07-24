import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function NewCollection() {
    const collections =[{
        image:'https://m.media-amazon.com/images/I/61gpS5ghfKL.jpg',
        name:'Wish Care',
        content:'Wish Care multi purpose Travel friendly pouch',
        rate:'Rs.499'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpY1CQbqWgmCeIRSXT-6x0Ld1IaG9Ozy9ug&usqp=CAU',
        name:'Envome',
        content:'Envome bamboo eco friendly plate',
        rate:'Rs.150'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ntOm4Gi1DGlZoDKdl8ru-ZeYljOT3Jt4J-Yn_IuPSVt7l4vmJd_3vOo3Q_vxfPKVNLc&usqp=CAU',
        name:'Riway',
        content:'Riway premium cotton rounds',
        rate:'Rs.150'
    },
    {
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRSIBV61OshmQlj4K5I0bwYSnHBgWReNbpd5nCy8v9MpD9F5Fjm5W8d8I68bUZzrPPDa0&usqp=CAU',
        name:'The Mend',
        content:'Mend eco friendly Stand up pouch',
        rate:'Rs.155'
    }
]
  return (
    <Row>
        <h2 className='title'>New Collections</h2>
        {
            collections.map((item) => (
             <Col>
               <Card style={{ width: '15rem' ,marginTop:'50px',marginLeft:'30px' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title style={{textAlign:'center'}}>{item.name}</Card.Title>
                  <Card.Text style={{textAlign:'center'}}>
                     {item.content}
                  </Card.Text>
                  <Card.Text style={{textAlign:'center',fontWeight:'bolder'}}>
                    {item.rate}
                  </Card.Text>
                </Card.Body>
               </Card>
             </Col>
            ))
        }

    </Row>
  )
}

export default NewCollection