import React from 'react'
import MyResort from '../components/MyResort'
import {Link} from  'react-router-dom'


function Sidebars() {
  return (
    <div className='bg-white sidebars'>
        <div className='m-2'>
        <i className='bi bi-bootstrap-fill me-2 fs-4'></i>
        <span className='brand-name fs-'>Your self</span>
        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item l py-2'>
            <i class="fa-solid fa-gauge"></i>
            <span>Dashboard</span>
            </a>

        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
           <i class="fa-solid fa-house"></i>
           <Link to={'/'}> <span >Home</span></Link>
            </a>

        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
            <i className='speedometer2 fs-4 me-2'></i>
           <Link to={'/aboutus'}><span>ABOUT US</span></Link> 
            </a>

        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
            <i class="fa-solid fa-hotel"></i>
          <Link to={'/resort'}><span>Resort views</span></Link>
           
            </a>

        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
            <i class="fa-solid fa-address-book"></i>
          <Link to={'/contact'}> <span>Contactus</span></Link> 
            </a>

        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
            <i className='speedometer2 fs-4 me-2'></i>
            <Link to={'/myservice'}>services</Link>
            <span></span>
            </a>

        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
            <i className='speedometer2 fs-4 me-2'></i>
            <Link to={'/myview'}>Sight View</Link>
            <span></span>
            </a>

        </div>
        <hr className='text-dark' />
        <div className='list-group list-group-flush'>
            <a className='list-group-item py-2'>
            <i class="fa-solid fa-book"></i>
            <Link to={'/bookingdetails'}>Booking Details</Link>
            <span></span>
            </a>

        </div>
    </div>
    
  )
}

export default Sidebars