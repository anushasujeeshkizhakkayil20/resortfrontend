import React, { useContext, useEffect, useState } from 'react'
import AddServicess from './AddServicess'
import { Link } from 'react-router-dom'
import { ServiceDeleteAPI, ServiceFacilityAPI } from '../services/allAPI'
import { addServiceResponseContext } from '../context/ContextShare'

function MyServiceResort() {
  const{addServiceResponse,setAddServiceResponse}=useContext(addServiceResponseContext)
  const [userServicess,setUserServicess] = useState([])

   const getUserService = async()=>{

     const token=sessionStorage.getItem("token")

     const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }

       const result = await ServiceFacilityAPI(reqHeader)
       console.log(result);
     
       setUserServicess(result.data)//result kanan vendi print
   }
    
     // console.log(setUserService);
   useEffect(()=>{
    getUserService()
   },[addServiceResponse])
      //handle delete
   const handleDelete =async(id)=>{
     const token =sessionStorage.getItem("token")
     const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result =await ServiceDeleteAPI(id,reqHeader)
    console.log(result);
    if(result.status===200){
      getUserService()
    }
    else{
      console.log(result.response.data);
    }
   }
  return (
    <>
    <div className='card-shadow p-3 ms-3 me-3'>
      <div className='ms-auto'>
      <Link to={'/addservice'}> <button className='btn btn-succeess'>Add Services</button></Link>
      </div>
      
       <div className='p-5'>
        <div className='mt-4'>
        <h6 className='text-succes'>Details</h6>
  <table className="table table-bordered border-primary">
             
                <thead >
                  
                  <div className='ms-auto'>
                 
                  </div>
                
                  <tr >
                    <td>title</td>
                     <td>Status</td>
                     <td >ServiceImage</td>
                  </tr>
                </thead>
                <tbody>
                 
                { userServicess?.length>0?
                userServicess?.map((service)=>(<tr>
                  
                    <td>{service.title}</td>
                    <td>{service.status}</td>
                    <td>
                    <button onClick={()=>handleDelete(service._id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
                    
                    </td>
                        
                      
                          </tr> )) :
                        <p>nothing to display</p> }
                </tbody>
              </table>
        </div>
    </div>
    </div>
    </>
  )
}

export default MyServiceResort