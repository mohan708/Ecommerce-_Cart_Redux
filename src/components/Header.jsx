import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';

const Header = () => {
  return (
    <>
   <Navbar style={{background:"black",color:"white",height:"60px"}}>
        <Container>
          <h3 className='text-light'>Ecommerce</h3>
          <div id="ex4">
          <span className='p1 fa-stack fa-2x has-badge' data-count={1}>
          <i className="fa-solid fa-cart-shopping text-light" style={{fontSize:25}}></i>
          </span>
          </div>        
        </Container>
        
      </Navbar>
    </>
  )
}

export default Header