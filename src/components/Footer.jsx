import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Footer() {
  return (
   
    <>
    <div  style={{height:'300px',color:'white',backgroundColor:'GrayText'}} className='d-flex justify-content-center align-items-center w-100 flex-column '>
      <Row>
        <Col>
        <div className="col-sm-4">
          <h5 className='mb-3' style={{overflowY:'hidden'}}>Resort </h5>
         <p>Your travel diary is a personal and creative space to capture the memories, and experiences of your journeys. </p>
        </div>
        </Col>
        <div className=" col-sm-2">
          
          <h4 className='mb-3 'style={{overflowY:'hidden'}}>Links</h4>
        <h6><Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home </Link></h6>
       <h6> <Link to={'/aboutus'} style={{textDecoration:'none', color:'white'}}>About us</Link></h6>
       <h6> <Link to={'/gallery'} style={{textDecoration:'none', color:'white'}}>Gallery</Link></h6>
        <Link to={'/contact'} style={{textDecoration:'none', color:'white'}}>contact</Link>
        
        </div>
        
        <div className="col-sm-6">
        <div className='d-flex justify-content-evenly align-item-center'>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i> </Link>
        <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}> <i class="fa-brands fa-facebook fa-2x"></i></Link>
        
        <div className="guides d-flex flex-column">
      <h4 className='mb-3 text-light'style={{overflowY:'hidden'}}>Guides</h4>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap </Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>
        

      </div>
      
        </div>
        </div>
         
        
      </Row>
    </div>
   
    </>
  )
}



export default Footer