import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import{Link, useNavigate} from 'react-router-dom'


function Header({dashboard}) {
  const navigate = useNavigate()
  const handleLogout =()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existingUser")
    navigate('/')
  }
  return (
    <>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}><Navbar.Brand href="#home">Luxury Resort</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           <Link to={'/serviceresort'} style={{textDecoration:'none', color:'white'}}> <Nav.Link href="#features">Services</Nav.Link></Link>
          <Link to={'/sightseeing'} style={{textDecoration:'none', color:'white'}}>  <Nav.Link href="#pricing">Sight View</Nav.Link></Link>
          <Link to={'/aboutus'} style={{textDecoration:'none', color:'white'}}>  <Nav.Link href="#pricing">About Us</Nav.Link></Link>
            <NavDropdown title="resort more" id="collapsible-nav-dropdown">
            <Link to={'/contact'}>  <NavDropdown.Item href="#action/3.1">Contact Us</NavDropdown.Item></Link>
             
              
            </NavDropdown>
          </Nav>
          <Nav>
        
        <button className='btn btn-success'><i class="fa-solid fa-phone"></i> 9597008967 </button> <Nav.Link eventKey={2} href="#memes">
        
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
       {
        dashboard && 
        <button onClick={handleLogout} className='btn btn-warning'>Logout</button>
       }
      </Container>
    </Navbar>
    
    </>
  )
}

export default Header