import React, { useEffect, useState } from 'react'
import Servicecard from '../components/Servicecard'
import { serviceuserAPI } from '../services/allAPI'
import { Col, Row } from 'react-bootstrap'

function ServiceResort() {

  const [servicehome,setServiceHome]=useState([])
  const getserviceuser = async()=>{
     const result = await serviceuserAPI()
     console.log(result.data);
     setServiceHome(result.data)
  }
    useEffect(()=>{
      getserviceuser()
    },[])
  return (

    
    <>
     <h1>Facilities</h1>
    <div className='d-flex text-align-center  mt-5 p-1 me-5' >
    
    {servicehome?.length>0?
    servicehome?.map((item)=>(<div> 
      <Servicecard service={item}/>
      </div>))
    :null
}

    </div>
    </>
  )
}

export default ServiceResort