import React, { useState } from 'react'
import {Form} from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import { bookregisterAPI } from '../services/allAPI'
import { bookloginAPI } from '../Assets/servicesbook/allAPI'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Booking1({bookingregister}) {
   const[userDatas,setUserDatas]=useState({
    username:"",
    email:"",
    phonenumber:""
   })
   const navigate = useNavigate()
  // console.log(userDatas);

  const RegisterForm = bookingregister?true:false

  //fun to register
  const handleRegister =async(e)=>{
    e.preventDefault()
    const{username ,email,phonenumber}=userDatas
    if(!username ||!email ||!phonenumber){
      toast.info('please fill the form completely')
    }
    else{
      const result =await bookregisterAPI(userDatas)
      console.log(result);
      if(result.status===200){
        toast.success(`${result.data.username} registed successfully`)
        setUserDatas({
          username:"",email:"",phonenumber:""

        })
        navigate('/bookinglogin')

      }
      else{
        toast.error(`${result.response.data}`)
      }
    }
  }
  
   //fun login
   const handleLogin =async(e) =>{
    e.preventDefault()
    const{email,phonenumber} = userDatas
    if(!email || !phonenumber){
      toast.info('please fill the form completely')
    }
    else{
      const result = await bookloginAPI(userDatas)
      console.log(result);
       
      if(result.status===200){
        //storedata
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        toast.success('Booking successfull')

        setUserDatas({
          username:"",email:"",phonenumber:""
        })
        setTimeout(()=>{
          navigate('/')
        },2000)
      

      }
      else{
        toast.error(result.response.data)
      }


    }
   }
  
  return (
    <>
    <div style={{width:'100%',height:'100vh'}}className='d-flex justify-content-center align-items-center'>
    <div className="w-75 container">
       <Link to={'/'} className='fs-4' style={{color:'blue',textDecoration:'none'}}> <i class="fa-solid fa-arrow-left"></i>Back to home</Link>
      <div className='card shadow bg-info rounded p-5'>
       <div className='row align-items-center'>
         <div className="col-lg-6">
          <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9b/4e/98/nirali-resorts.jpg?w=700&h=-1&s=1" alt="" className='w-100' />

         </div>
         <div className="col-lg-6">
          <div className='d-flex align-items-center justify-content-center flex-column'>
          <h5 className='text-light ms-5 mt-4'>
           {
           RegisterForm ? "Sign Up to Your Account":"Sign In your Account"
           }
            
          </h5>
         
          <Form className='w-100 p-5'>
          { RegisterForm &&
         <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="text" placeholder="Enter User name" value={userDatas.username} onChange={(e)=>setUserDatas({...userDatas,username:e.target.value})}/>
      </Form.Group>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="email" placeholder="Enter email" value={userDatas.email} onChange={(e)=>setUserDatas({...userDatas,email:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Control type="password" placeholder="Enter phonenumber"value={userDatas.phonenumber} onChange={(e)=>setUserDatas({...userDatas,phonenumber:e.target.value})}/>
      </Form.Group>
      
      {RegisterForm ?
      <div>
      <button onClick={handleRegister} className='btn btn-warning mt-4'>Register</button>
      <p className='text-warning'>Already a user ? Click here to <Link className='text-light' to={'/booklogin'}>Login</Link></p>
      
      </div>
      :
      <div>
      <button onClick={handleLogin} type='button' className='btn btn-warning mt-4'>Booking</button>
      <p className='text-warning'>New User ? Click here to <Link className='text-light' to={'/bookingregister'}>Register</Link></p>
      </div>
}
    </Form>
         </div>

         </div>
       </div>
      </div>
    </div>

  </div>
  <ToastContainer theme='colored' autoclose={2000} position='top-center'/>
  </>
  )
}

export default Booking1