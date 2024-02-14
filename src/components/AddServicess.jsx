import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addServiceAPI } from '../services/allAPI';
import { addServiceResponseContext } from '../context/ContextShare';


function AddServicess() {
  const{addServiceResponse,setAddServiceResponse}=useContext(addServiceResponseContext)
 
  const [serviceDetails,setServiceDetails]=useState({
     title :"",
     status:"",
     serviceImage:""
  })
     //state holde to url of the file
    const[preview,setPreview]=useState("")
    //state hold token
     const[token,setToken]=useState("")
     useEffect(()=>{
       if(sessionStorage.getItem("token")) { 
        setToken(sessionStorage.getItem("token"))
      }
     },[])
    
    useEffect(()=>{
      if(serviceDetails.serviceImage){
        setPreview(URL.createObjectURL(serviceDetails.serviceImage))

      }

    },[serviceDetails.serviceImage])
    console.log(preview);
   //display
   console.log(serviceDetails);
 
        

       //function to add
       const handleAdd= async(e)=>{
       
          const {title ,status,serviceImage}=serviceDetails
           if(!title ||!status ||!serviceImage ){
            alert("please fill the form completely")

           }
           else{
              
            //reqbody
            //1)create object form data class since we have upload
            //2)append data-append()can add only single item
             const reqBody = new FormData()
             //add data -append
              reqBody.append("title",title)
              reqBody.append("status",status)
              reqBody.append("serviceImage",serviceImage)
              //header
              if(token){
                 const reqHeader ={
                  "Content-Type":"multipart/form-data",
                  "Authorization":`Bearer ${token}`
              }
             const result = await addServiceAPI(reqBody,reqHeader)
             console.log(result);
             if(result.status ===200){
              console.log(result.data);
               alert("facilities added successfully")
               setAddServiceResponse(result.data)
             }
             else{
                 alert(result.response.data);
             }
           }
          }

       }
  return (
    <>
   <Card style={{ width: '18rem' }}>
    <div className='row '>
      <div  className='col-lg-6'>
      <label htmlFor="upload">
        <input id="upload" type='file'  style={{display:'none', width:'200px',height:'50px'}}  onChange={(e)=>setServiceDetails({...serviceDetails,serviceImage:e.target.files[0]})}  />
      <img src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0lA2r_VPdb1gh5DBFblyS8PpVwQwfVByhAQ&usqp=CAU"} alt=""  style={{width:'280px'}}/>
      </label>
    </div>
     </div>
      <Card.Body>
        <div col-lg-6>
       <div className='mb-3 mt-2 w-100'>
        <input type="text"  className='form-control' placeholder='service title' value={serviceDetails.title} onChange={(e)=>setServiceDetails({...serviceDetails,title:e.target.value})}/>

       </div>
       <div className='mb-3 mt-2 w-100'>
        <input type="text"  className='form-control' placeholder='service status' value={serviceDetails.status} onChange={(e)=>setServiceDetails({...serviceDetails,status:e.target.value})}/>

       </div>
       <div>
        <button className='btn btn-primary text-center' >Remove</button>
        <button  type='button' className='btn btn-success text-center' onClick={handleAdd}>ADD</button>
       </div>
       </div>
       

      </Card.Body>
    </Card>
  </>
  )
}

export default AddServicess