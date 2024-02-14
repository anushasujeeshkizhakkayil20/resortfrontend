import React, { useEffect, useState } from 'react'
import ResortCard from '../components/ResortCard'
import { Col, Row } from 'react-bootstrap'
import {  allresortAPI } from '../services/allAPI'

function Resort() {
const [allResort,setAllResort]=useState([])
const[searchKey,setSearchKey]=useState("")


const getAllResort = async()=>{
  
  const result = await allresortAPI(searchKey)
 console.log(result);
   if(result.status === 200){
    setAllResort(result.data)
   }
   else{
    console.log(result.response.data);
   }
  
 
}
   console.log(allResort);
   console.log(searchKey);
   
   useEffect(()=>{
     getAllResort()
   
   },[searchKey])
  return (
    <>
    <div className="text-center mb-5" style={{marginTop:'100px'}}>
     <h1 className='text-primary'>Resort Details</h1>
     <div className="d-flex justify-content-center align-items-center">
      <div className='d-flex mt-5 w-25'>
     <input type="text" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} className='form-control' placeholder='search' />
     <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{marginLeft:'-40px'}}></i>
      </div>
     </div>
    </div>
    <Row className='container-fluid mb-5'>
      {allResort?.length>0?
      allResort?.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4}>
        <ResortCard resort={item}/>
      </Col>))
        :<p></p>
      }
    </Row>
    </>
  )
}

export default Resort