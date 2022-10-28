import React from 'react';
import '../Components/style/header.css';
import { Modal, Button } from 'react-bootstrap';

const Header = ({size, SetShow},props) =>{
  const handleShow = () =>props.setShow(true);
  const handleClose = () => props.setShow(false);
  return (
<nav>
<div className="header-bar">
<span className="myShop"onClick={()=>SetShow(true)}>
    potrait Shop
</span>
<div className="cart"onClick={()=>SetShow(false)}>
    <span>
   
        <i className="fas fa-cart-plus">  </i>
      
    </span>
    <h1>{size}</h1>
    <span>
    <Button className='btn'onClick={handleShow}>ADD NEW ITEM</Button>
    </span>
</div>





</div>
</nav>
  )
}

export default Header