import React,{useContext, useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BASE_URL } from '../services/baseURL';
import { editResortAPI } from '../services/allAPI';
import { editResortResponseContext } from '../context/ContextShare';

function EditResort({resort}) {

 const {editResortResponse,setEditResortResponse}=useContext(editResortResponseContext)
    const [show, setShow] = useState(false);

    const[resortDetails,setResortDetails]=useState({
        id:resort._id,
        title:resort.title,
        name:resort.name,
        days:resort.days,
        rate:resort.rate,
        resortImage:""
      
       })

    const [preview,setPreview]=useState("")
    const handleClose=()=> {setShow(false)
    handleClose1()}
    const handleShow = () => setShow(true);
      
   
       useEffect(()=>{
       if(resortDetails.resortImage){
        setPreview (URL.createObjectURL(resortDetails.resortImage))
       }
       },[resortDetails.resortImage])

       const handleClose1 =()=>{
        setResortDetails({
          id:resort._id,
          title:resort.title,
          name:resort.name,
          days:resort.days,
          rate:resort.rate,
          resortImage:""

        })
        setPreview("")
       }
       const handleUpdate =async(e)=>{

        e.preventDefault()

        const{id,title,name,days,rate,resortImage}=resortDetails

        if(!title || !name ||!days ||!rate){
          alert("please fill the form completely")
        }
        else{
          const reqBody = new FormData()

          reqBody.append("title",title)
          reqBody.append("name",name)
          reqBody.append("days",days)
          reqBody.append("rate",rate)
         
         preview?reqBody.append("resortImage",resortImage):reqBody.append("resortImage",resort.resortImage)
         
           const token =sessionStorage.getItem("token")

           if(preview){
            const reqHeader ={
              "Content-Type":"multipart/form-data",
              "Authorization":`Bearer ${token}`
            }
            const result = await editResortAPI(id,reqBody,reqHeader)
             console.log(result);
             if(result.status===200){
              alert('update successfull')
              handleClose()
              setEditResortResponse(result.data)
              
              
             }
             else{
              console.log(result.response.data);
             }
           }
           else{
            const reqHeader ={
              "Content-Type":"application/json",
              "Authorization":`Bearer ${token}`
            }
            const result = await editResortAPI(id,reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
              alert('update successfull')
              handleClose()
              setEditResortResponse(result.data)
             }
             else{
              console.log(result.response.data);
             }
            
           }
          }
       }
      
  return (
    <div>
 <button onClick={handleShow} className='btn'><i class="fa-solid fa-pen-nib text-primary"></i></button>
 <Modal
      show={show} onHide={handleClose} size='lg' centerd>
      
    
      <Modal.Header closeButton>
        <Modal.Title>Edit Resort Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <div className='row'>
        <div className='col-lg-6'>
        <label htmlFor='upload'>
            <input id='upload' type="file" style={{display:'none'}} onClick={e=>setResortDetails({...resortDetails,resortImage:e.target.files[0]})}/>
            <img className='img-fluid' src={preview?preview:`${BASE_URL}/uploads/${resort.resortImage}`}alt="" />
           </label>
        </div>
         <div className='col-lg-6'>
            <div className='mb-3 w-100 mt-4'>
                <input type="text"  className='form-control' placeholder='Resort title' value={resortDetails.title} onChange={e=>setResortDetails({...resortDetails,title:e.target.value})}/>

            </div>
            <div className='mb-3 w-100'>
                <input type="text"  className='form-control' placeholder='Resort Name' value={resortDetails.name}  onChange={e=>setResortDetails({...resortDetails,name:e.target.value})}/>

            </div>
            <div className='mb-3 w-100'>
                <input type="text"  className='form-control' placeholder='Days'  value={resortDetails.days}  onChange={e=>setResortDetails({...resortDetails,days:e.target.value})}/>

            </div>
            <div className='mb-3 w-100'>
                <input type="text"  className='form-control' placeholder='Rate per couple' value={resortDetails.rate} onChange={e=>setResortDetails({...resortDetails,rate:e.target.value})} />

            </div>
          
          
         </div>
       </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose1}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleUpdate}>UPDATE</Button>
      </Modal.Footer>
    </Modal>


    </div>
  )
}

export default EditResort