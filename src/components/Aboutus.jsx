import React from 'react'
import { Col, Row } from 'react-bootstrap'
import image from'../Assets/newresort.jpg'
import image1 from'../Assets/resort5.webp'
import image2 from'../Assets/resort3.jpeg'
import resort1 from '../Assets/resort1.jpg'
import {Link} from 'react-router-dom'
import chembra from '../Assets/Chembra-Peak.webp'
import tea from "../Assets/tea.webp"
function Aboutus() {
  return (
    <div>
     
     <Row>
      <Col>
      <img src={chembra} alt="" style={{height:'50vh',width:'100%'}} />
      </Col>
      <div>
        <h1>Welcome to little piece of heaven, where the clouds and mist meet with the lush green forest in western ghat. </h1>
        <h4> 
      Enter EDEN better known as Blue Ginger Wayanad Resorts in comfortable Pick up &amp; Drop in customized 4 – wheel drives. 
      </h4>
      <h6>Elegant furnishings, luxurious rooms and comfortable discreet service ensure you relax and enjoy your stay at blue ginger Wayanad Resorts. Start the day with breakfast served by the attendant staff. Take a refreshing dip in the natural streams, waterfalls that bound in our 20 acre property and then set out on adventure tours, sightseeing trips, trekking expeditions, and wildlife safaris. Feast your eyes on the bounties of nature when you go bird watching.</h6>
        </div>
        <Col>
        <div className="col-md-3">
         <img src={tea} alt="" />
        </div>
        </Col>
      <Col>
      <img src={image1} alt="" />
      </Col>
      <Col>
      <p text-center mb-4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam distinctio, ipsa ab deserunt suscipit esse debitis aliquid, laudantium commodi ex praesentium nam deleniti quaerat, tenetur illo earum nulla corporis quidem?
      amet consectetur adipisicing elit. Laboriosam distinctio, ipsa ab deserunt suscipit esse debitis aliquid, laudantium commodi ex praesentium nam deleniti quaerat, tenetur illo earum nulla corporis quidem
      </p>
      </Col>
     
  

       
        
     </Row>
     <Link className='fs-5' style={{color:'blue'}} to={'/'}> <i class="fa-solid fa-arrow-left"></i>Back to home</Link>
    </div>
  )
}

export default Aboutus