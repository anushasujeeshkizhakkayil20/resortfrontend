import React, { useContext, useEffect, useState } from 'react'
import AddResorts from './AddResorts'
import { deleteUserResortAPI, userResortAPI } from '../services/allAPI'
import { addResortResponseContext, editResortResponseContext } from '../context/ContextShare'
import EditResort from './EditResort'


function MyResort() {
  const {addResortResponse,setAddResortResponse}=useContext(addResortResponseContext)
  const {editResortResponse,setEditResortResponse} =useContext(editResortResponseContext)

  const[userResorts,setUserResorts]=useState([])
  const getUserResort =async()=>{

   

      const token =sessionStorage.getItem("token")

     
        const reqHeader ={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    
    const result = await userResortAPI(reqHeader)
    console.log(result.data);
    setUserResorts(result.data)

  }
  useEffect(()=>{
     getUserResort()
  },[addResortResponse,editResortResponse])
  const handleDelete = async(id)=>{
    const token=sessionStorage.getItem("token")
    
    const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await deleteUserResortAPI(id,reqHeader)
    console.log(result);
    if(result.status===200){
      getUserResort()
    }
    else{
      console.log(result.response.data);
    }

  }
  return (
    <>
    <div className='card shadow p-1 ms-25 me-3'>
      <div className='d-flex'>
       <h3 className='text-primary ms-3'>Resort Information</h3>
       <div className='ms-auto'>
        
      <AddResorts/>
       </div>
      </div>
      <div className='mt-4'> 
  {userResorts?.length >0? 
  userResorts?.map((item)=>(<div className='border align-items-center rounded p-2 d-flex bg-light' >
  <h5>{item.title}</h5>
   <div className="icon ms-auto">
   <EditResort resort={item}/>
    <button onClick={()=>handleDelete(item._id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
   </div>

 </div>)) :
    
 <p className='text-danger fs-3 '>No Updations</p>}
      </div>
    
    </div>
    </>
  )
}

export default MyResort