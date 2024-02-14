import React, { useEffect, useState } from 'react'
import { bookAPI, deletebookAPI } from '../services/allAPI'

function MybookingDetails() {

  const[userBook ,setUserBook] = useState([])


  const getuserBookResort =async()=>{

    const token =sessionStorage.getItem("token")
    const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }

    const result =await bookAPI(reqHeader)
    console.log(result);
    setUserBook(result.data)//output display

  }
  useEffect(()=>{
    getuserBookResort()
  },[])


  //delete item
  const handleDelete =async(id)=>{
    const token =sessionStorage.getItem("token")
    const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result =await deletebookAPI(id,reqHeader)
    console.log(result);
    if(result.status === 200){
      getuserBookResort()
    }
    else{
      console.log(result.response.data);
    }
  }
  return (
    
    
    <>
    
    <div className='card-shadow p-3 ms-3 me-3'>
    <div className='ms-auto'>

    </div>
    
     <div className='p-5'>
      <div className='mt-4'>
      <h6 className='text-succes'>Booking Details</h6>
<table className="table table-bordered border-primary">
           
              <thead >
                
                <div className='ms-auto'>
               
                </div>
              
                <tr >
                  
                 
                   <td>email</td>
                   <td >phonenumber</td>
                </tr>
              </thead>
              <tbody>
             {userBook?.length>0?
             userBook?.map((item)=>( <tr>
                
              
              <td>{item.email}</td>
              <td>{item.phonenumber}</td>
              <td>
              <button onClick={()=>handleDelete(item._id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
              
              </td>
                  
                
                    </tr>))
             :
                      <p>nothing to display</p> }
              </tbody>
            </table>
      </div>
  </div>
  </div>
  </>
  )
}

export default MybookingDetails