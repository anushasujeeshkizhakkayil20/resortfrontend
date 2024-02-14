import React, { useEffect } from 'react'
import { Col ,Row} from 'react-bootstrap'
import MyResort from '../components/MyResort'
import Profile from '../components/Profile'
import { useState } from 'react'
import Sidebars from './Sidebars'
import AddResortDashboard from './AddResortDashboard'
import Header from '../components/Header'
import MyServiceResort from '../components/MyServiceResort'
import { Link } from 'react-router-dom'
function Dashboard() {
  
    const [username,setUsername]=useState("")
    useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username);
    },[])
   
  return (
   <>
    <Header dashboard/>
   <h2 className='text-success mt-3 ms-3'>Welcome <span className='text-warning'>Admin</span></h2>
   <Row className='container-fluid mt-5 mb-5'>
   
   <Col md={4}>
   <Sidebars/>
    </Col>


    
    
    <Col md={6}>
    <MyResort/>
    </Col>
    <Col md={3}>
    </Col>
   </Row>
   </>
  )
}

export default Dashboard