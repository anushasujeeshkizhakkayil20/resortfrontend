import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addResortAPI } from '../services/allAPI';
import { useContext } from 'react';
import { addResortResponseContext } from '../context/ContextShare';

function AddResorts() {

  const {addResortResponse,setAddResortResponse}=useContext(addResortResponseContext)

 //state hold values from input box
 const[resortDetails,setResortDetails]=useState({
  title:"",
  name:"",
  days:"",
  rate:"",
  resortImage:""

 })

 const [show, setShow] = useState(false);
//state hold the url of the state
    const[preview,setPreview]=useState("")

    //state hold token
    const[token,setToken]=useState("")

    useEffect(()=>{
     if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))}
    },[])

    useEffect(()=>{
      if(resortDetails.resortImage)
        setPreview(URL.createObjectURL(resortDetails.resortImage))//url is a predefined fun
        
      
    },[resortDetails.resortImage])
    console.log(preview);
    //display state
    console.log(resortDetails);

    const handleClose=()=>{
      setShow(false)
      handleClose1()
    }

    const handleClose1 = () => {
    
      setResortDetails({
        title:"",
        name:"",
        days:"",
        rate:"",
        resortImage:""
      
      })
      setPreview("")
    };
    const handleShow = () => setShow(true);
     //fun add resort
     const handleResort = async(e)=>{
      e.preventDefault()
       const { title, name, days, rate,resortImage }=resortDetails
       if(!title || !name ||!days ||!rate ||!resortImage){
         alert('please fill the form completely')
       }
       else{
        //reqbody
        //1)create an obj of formdata-upload content
        const reqBody = new FormData()
        //2)add data-append()
        reqBody.append("title",title)
        reqBody.append("name",name)
        reqBody.append("days",days)
        reqBody.append("rate",rate)
        reqBody.append("resortImage",resortImage)
        //reqHeader

        if(token){
          const reqHeader ={
          "Content-Type":"multipart/form-data",
          "Authorization":`Bearer ${token}`
        }

     const result = await addResortAPI(reqBody,reqHeader)
           console.log(result);
           if(result.status===200){
            console.log(result.data);
            alert('project added successfully')
            handleClose()

            setAddResortResponse(result.data)

           }
           else{
            alert(result.response.data);
            handleClose1()
           }
       }
     }
    }
    
  return (
    <>
    <Button variant="success" onClick={handleShow}>
    Add Resort
    </Button>

    <Modal
      show={show} onHide={handleClose} size='lg' centerd>
      
    
      <Modal.Header closeButton>
        <Modal.Title>Add Resort</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className='row'>
        <div className='col-lg-6'>
        <label htmlFor='upload'>
            <input id='upload' type="file" style={{display:'none'}}  onChange={(e)=>setResortDetails({...resortDetails,resortImage:e.target.files[0]})}/>
            <img className='img-fluid' src={preview?preview:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1LmVR-PHa0qHNlIcQ3Un7TRygB9BZ_Se06w&usqp=CAU"} alt="" />
           </label>
        </div>
         <div className='col-lg-6'>
            <div className='mb-3 w-100 mt-4'>
                <input type="text"  className='form-control' placeholder='Resort title' value={resortDetails.title} onChange={(e)=>setResortDetails({...resortDetails,title:e.target.value})}/>

            </div>
            <div className='mb-3 w-100'>
                <input type="text"  className='form-control' placeholder='Resort Name'  value={resortDetails.name} onChange={(e)=>setResortDetails({...resortDetails,name:e.target.value})}/>

            </div>
            <div className='mb-3 w-100'>
                <input type="text"  className='form-control' placeholder='Days'  value={resortDetails.days} onChange={(e)=>setResortDetails({...resortDetails,days:e.target.value})}/>

            </div>
            <div className='mb-3 w-100'>
                <input type="text"  className='form-control' placeholder='Rate per couple'  value={resortDetails.rate} onChange={(e)=>setResortDetails({...resortDetails,rate:e.target.value})}/>

            </div>
          
          
         </div>
       </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose1}>
          Cancel
        </Button>
        <Button variant="success"onClick={handleResort}>Add</Button>
      </Modal.Footer>
    </Modal>
  </>

  )
}

export default AddResorts