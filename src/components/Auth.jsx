import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import {Form} from 'react-bootstrap'
import { loginAPI, registerAPI } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function Auth({register}) {
const [userData ,setUserData ]=useState({
   username:"",
   email:"",
   password:""
})

const navigate=useNavigate()
//console.log(userData);

  const RegisterForm = register?true:false
  //fun reg
  const handleRegister =async(e)=>{
    e.preventDefault()
    const{username,email,password} = userData

    if(!username || !email ||!password){
      toast.info('please fill the form completely')
    }
    else{
    const result =await registerAPI(userData)
    console.log(result);
     if(result.status===200){
      toast.success(`${result.data.username}registerd successfully`)
       setUserData({
         username:"",email:"",password:""
       })
       navigate('/login')
     }
     else{
         toast.error(`${result.response.data}`)
     }
    }
  }

  //function to login
  const handleLogin =async(e)=>{
   e.preventDefault()
     const {email,password} = userData
     if(!email || !password){
      toast.info('please fill the completely')
     }else{
      const result = await loginAPI(userData)
      console.log(result);

      if(result.status===200){
        //store data
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        toast.success('login successfull')
            setUserData({
              username:"",password:""
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
            <img src="https://img.freepik.com/premium-photo/there-is-red-background-with-floral-design-it-generative-ai_958192-24836.jpg" alt="" className='w-100' />

           </div>
           <div className="col-lg-6">
            <div className='d-flex align-items-center justify-content-center flex-column'>
            <h5 className='text-light ms-5 mt-4'>
              {RegisterForm ? "Sign Up to Your Account":"Sign In your Account"
              }
            </h5>
            <Form className='w-100 p-5'>
           { RegisterForm &&
           <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter User name" value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})} />
        </Form.Group>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email"  value={userData.email}  onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="password" placeholder="Enter Password" value={userData.password}  onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
        </Form.Group>
        
        { RegisterForm?
        <div>
        <button onClick={handleRegister} className='btn btn-warning mt-4'>Register</button>
        <p className='text-warning'>Already a user ? Click here to <Link className='text-light' to={'/login'}>Login</Link></p>
        
        </div>
        :
        <div>
        <button type='button' onClick={handleLogin} className='btn btn-warning mt-4'>Login</button>
        <p className='text-warning'>New User ? Click here to <Link className='text-light' to={'/register'}>Register</Link></p>
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

export default Auth