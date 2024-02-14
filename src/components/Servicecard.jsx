import React from 'react'
import Card from 'react-bootstrap/Card';
import resort5 from '../Assets/resort5.webp'
import { BASE_URL } from '../services/baseURL';

function Servicecard({service}) {
  return (
    <div style={{width:'400px',height:'400px'}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={service?`${BASE_URL}/uploads/${service.serviceImage}`:resort5}  style={{width:'280px',height:'200px'}}/>
      <Card.Body>
        <Card.Title>{service.title}</Card.Title>
        <Card.Text>
        {service.status}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Servicecard