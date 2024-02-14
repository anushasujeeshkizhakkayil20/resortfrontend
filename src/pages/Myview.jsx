import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Myview() {
  return (
    
    <div className='card shadow p-3 me-3 ms-3'>
     <div>
      <h3 className='text-primary text-center'>ADD SIGHT VIEW</h3>
      
       <div>
        
       <Link to={'/addsight'}>Add sight</Link>
       </div>
      </div>
     
    </div>
  )
}

export default Myview