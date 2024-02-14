import React from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'react-bootstrap'
function Contact() {
  return (
    <>
      <div style={{width:'100%',height:'100vh'}}className='d-flex justify-content-center align-items-center'>
      <div className="w-75 container">
         <Link to={'/'} className='fs-4' style={{color:'blue',textDecoration:'none'}}> <i class="fa-solid fa-arrow-left"></i>Back to home</Link>
        <div >
         <div className='row align-items-center'>
           <div className="col-lg-6">
            
          <h1 className='text-success'>Wayanad Tour Packages Contact</h1> 
          <h4>Book Your Travel</h4> 
          <h6>PGRA – 50, TC 36 / 168, Perunthanni, Vallakkadavu P.O,
            Trivandrum – 695008</h6>  

           Call: 91-8589897575

         eMail: tours@voyageskerala.com

         <h2 className='text-success'>Wayanad Tour Local Office</h2>
           <h4>Book Your Travel</h4>
            <h6>
            V308/A, Muthethodi House, Thalipuzha, Lakkadi,
            Vythiri, Kerala 673576

           Call: 91-8589897575

           eMail: tours@voyageskerala.com
            </h6>
          
           </div>
           <div className="col-lg-6">
            <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='text-light ms-5 mt-4'>
            
            </h1>
            <h1 className='text-warning'>Send us a message</h1>
            <h6 >Send us your requirement and we guarantee a reply within 2 working hours. (9:30 AM to 6 PM). In case of urgent requirement whatsapp us or call us</h6>
            <div>
              <img src="https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2023/3/29/wayanad-pic.jpg" alt="" style={{width:'500px'}} />
            </div>
            
           </div>

           </div>
         </div>
        </div>
      </div>

    </div>
     </>
    
      
   
  )
}

export default Contact