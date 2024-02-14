import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { sightAddAPI } from '../services/allAPI';

function AddSightview() {
    //create a state to hold values
  const[sightDetails,setSightDetails]=useState({
     title:"",
     overview:"",
     sightImage:""
  })
    //state to hold the url of the file
    const[preview,setPreview] = useState("")
    //state token
    const[token,setToken]=useState("")

    useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
    },[])
     
    useEffect(()=>{
       sightDetails.sightImage &&
        setPreview(URL.createObjectURL(sightDetails.sightImage))
       
    },[sightDetails.sightImage])

    //display prevview
    console.log(preview);

      //display state
     console.log(sightDetails);

     //handle remove
     const handleRemove =()=>{
      setSightDetails({
        title:"",
       overview:"",
       sightImage:""
       })
       setPreview("")
     }
     //fun to add project
       const handleAdd =async(e)=>{
        e.preventDefault()
        const {title,overview,sightImage} =sightDetails

        if(!title || !overview ||!sightImage){
          alert('please fill the form completely')
        }
        else{
         //reqbody
         //1)create an object formData class since we have uploaded content

           const reqBody = new FormData()
        //2)add data -append -can add single item
        reqBody.append("title",title)
        reqBody.append("overview",overview)
        reqBody.append("sightImage",sightImage)

        //req header
        
        if(token) {
          const reqHeader ={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
         }
         const result = await sightAddAPI(reqBody,reqHeader)
         console.log(result);
         if(result.status===200){
          console.log(result.data);
          alert('project added successfully')
          handleRemove()
         
         }
         else{
          alert(result.response.data);
          handleRemove()
         }
        }
      }
       }

  return (
    <div>
         <Card style={{ width: '56rem' }}>
      <Card.Body>
       
            <div className='col-lg-6'>
         <label htmlFor="upload">
            <input id ="upload" type="file"  style={{display:'none'}} onChange={(e)=>setSightDetails({...sightDetails,sightImage:e.target.files[0]})}/>
            <img  src={preview?preview:"https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg" }alt="" style={{width:'800px' ,height:'300px'}} />
         </label>
         </div>
          <div className='mb-3 w-100 p-4'>
           <input type="text" className='form-control' placeholder='Enter the title' value={sightDetails.title} onChange={(e)=>setSightDetails({...sightDetails,title:e.target.value})}/>
          </div>
          <div className='mb-3 w-100 p-2'>
            <textarea  rows="3" className='form-control' placeholder='sightover view' value={sightDetails.overview} onChange={(e)=>setSightDetails({...sightDetails,overview:e.target.value})}>

            </textarea>
          </div>
          <button className='btn btn-success text-center' onClick={handleRemove}>remove</button>
            <button className='btn btn-success text-center' onClick={handleAdd}>ADD</button>
          
      </Card.Body>
    </Card>
    </div>
  )
}

export default AddSightview