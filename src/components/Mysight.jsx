import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  resort5 from '../Assets/resort5.webp'
function Mysight() {
  return (
    <div>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={resort5} />
            <Card.Body>
              <input type="text" className='p-2'/>
              <Card.Text>
               <textarea  className='mt-5 p-5'></textarea>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <button className='btn btn-success text-center'>ADD</button>
    </div>
  )
}

export default Mysight