import React from 'react'
import Card from 'react-bootstrap/Card';
import resort33 from '../Assets/resort3.jpeg'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseURL';
import  images from '../Assets/images.jpeg'


function ResortCard({resort}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
<>
<Card className='shadow rounded btn' onClick={handleShow}>
      <Card.Img variant="top" height={'200px'} src={resort.resortImage?`${BASE_URL}/uploads/${resort.resortImage}`:images} />
      <Card.Body>
        <Card.Title className='text-center'>{resort.title}</Card.Title>
        
      </Card.Body>
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>{resort.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Row>
        <Col md={6}>
        <img width={'100%'} height={'200px'} src={resort.resortImage?`${BASE_URL}/uploads/${resort.resortImage}`:images} alt="no-image" />
        </Col>
        <Col md={6}>
        <h4>{resort.name}</h4>
         <p>{resort.days}</p>
         <h6 className='text-blue'> <span className='fs-4' > ₹</span> {resort.rate}</h6>
        </Col>
       </Row>
        </Modal.Body>
       
      </Modal>
</>
  )
}

export default ResortCard