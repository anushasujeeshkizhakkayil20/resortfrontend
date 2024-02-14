import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className='card shadow p-5'>
      <div className='d-flex justify-content-between'>
       <h2>Profile</h2>
       <button  onClick={() => setOpen(!open)} className='btn btn-outline-info '><i class="fa-solid fa-angle-down"></i></button>
      </div>
      <Collapse in={open}>
      <div className='row justify-content-center '>
        <label htmlFor="profile">
            <input id='profile' type="file" style={{display:'none'}} />
            <img width={'200px'} height={'200px'}src="data:image/jpeg;base64,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" alt="noimage" className='rounded-circle' />
        </label>
         <div className='mb-3 mt-5  w-100'>
            <input type="text" placeholder='gmail' className='form-control' />

         </div>
         <div className='mb-3  w-100'>
            <input type="text" placeholder='instagram' className='form-control' />

         </div>
         <div className='mb-3 mt-3 '>
           <button className='btn btn-success rounded w-100'>Update</button>
         </div>
      </div>
      </Collapse>
    </div>
  )
}

export default Profile