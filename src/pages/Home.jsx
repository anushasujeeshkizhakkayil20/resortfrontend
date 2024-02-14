import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import titleImage from'../Assets/lady.jpg'
import Aboutus from '../components/Aboutus'
import titleImage1 from'../Assets/newresort.jpg'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ResortCard from '../components/ResortCard'
import { Link } from 'react-router-dom'
import titleImg from '../Assets/re2.jpg'
import couple from '../Assets/couple.jpg'
import dj from '../Assets/dj.jpg'
import { homeresortAPI } from '../services/allAPI'
import banner from '../Assets/banner-13.jpg'
import sea from '../Assets/sea.jpg'
import churm from '../Assets/churm.png'
import Header from '../components/Header'




function Home() {
  const[islogin,setIsLogin]=useState(false)
   const[homeResort,setHomeResort]=useState([])



     useEffect(()=>{
      if(sessionStorage.getItem("token")){
        setIsLogin(true)

      }

     },[])
    const getHomeResort =async()=>{
      const result =await homeresortAPI()
      console.log(result.data);
      setHomeResort(result.data)
     }
    useEffect(()=>{
     getHomeResort()
    },[])


  return (
   <>
   <div >
    <Header/>
    <Row>
      <Col>
      
      <img src={banner} alt="no image"  style={{height:'90vh',width:'100%'}} />
     
      </Col>
   
    </Row>
   
   </div>
      <div className='text-center'>
      {islogin?
        <Link to={'/dashboard'}><Button variant="primary">Manage Resort</Button></Link>:
      <Link to={'/login'}><Button variant="primary">Get Started</Button></Link> }
      </div>
    <div className='mt-5 ' >

     <Row className='d-flex text-align-center '>
     <h1 className='text-center'>About US</h1>
      <Col className='d-flex ' >
      
      
     
     
       <img src={churm} alt=""  style={{width:'800px',height:"400px"}}/>
    
      </Col>
      <Col>
      
      <p text-center mb-4>The 900 Kandi Glass Bridge offers a spellbinding experience combining thrilling adventure and awe-inspiring natural vistas. Suspended high above the lush valleys and verdant landscapes, our glass bridge promises an unparalleled journey that will leave you speechless.In the DTPC Adventure Tourism Park, the beautiful bridge is located. So, along with visiting the bridge, you can also enjoy the beauty of the park. The project was done by a private company. Not only this but the inauguration festival of the Glass Bridge was attended by various renowned people. 

     So, if you are planning to go for the Wayanad tour package, just look at the beautiful bridge. Along with this, you can enjoy the nearby places also. It will provide you with a beautiful experience, and if you are an adventure lover, this place is the best for you.
      </p>
      
      </Col>

     


       
       <div>
       <Card className="text-center mt-4 p-3">
      <Card.Img style={{width:"100%",height:'60vh ' }} src="https://aftertherains.in/blog/wp-content/uploads/2023/03/Wild-and-Wonderful-Wayanad.jpg"/>
      <Card.Body>
        <Card.Title style={{fontSize:'50px'}}>Luxury in the Jungle - Blueginger Resorts</Card.Title>
        <Card.Text>
        Enter EDEN better known as Blue Ginger Wayanad Resorts in comfortable Pick up & Drop in customized 4 – wheel drives. Elegant furnishings, luxurious rooms and comfortable discreet service ensure you relax and enjoy your stay at blue ginger Wayanad Resorts.
        </Card.Text>
       <Link to={'./bookinglogin'}><Button variant="primary">BOOKING</Button></Link> 
      </Card.Body>
      
    </Card>

       </div>

       <div className='mt-5 all-resort mb-5 '>
        <h1 className='text-center'>Packages</h1>
        <marquee scrollAmount={20} className="mt-5">
        
          <div className='d-flex'>
          {homeResort?.length>0?
          homeResort?.map((item)=>(
            <div className='ms-5' style={{width:'500px'}}>
             <ResortCard resort={item}/>
            </div>))

            :null
}
          </div>
          </marquee>
          <div className='text-center mt-5'>
          <Link to={'/resort'}> See more resorts</Link>
            
          </div>
       </div>

       
       
     </Row>
    </div>

   </>
  )
}

export default Home