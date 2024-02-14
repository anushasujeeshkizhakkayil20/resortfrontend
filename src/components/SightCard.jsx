import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  resort5 from '../Assets/resort5.webp'
import { BASE_URL } from '../services/baseURL';

function SightCard({sight}) {
  return (


    <div>
        <Row xs={1} md={1} className="g-1">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={sight?`${BASE_URL}/uploads/${sight.sightImage}`:resort5} style={{width:'1400px' ,height:'500px'}}/>
            <Card.Body>
              <Card.Title style={{width:'1300px'}}>{sight.title}</Card.Title>
              <Card.Text style={{width:'1300px' }}>
               {sight.overview}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


    </div>
  )
}

export default SightCard