import React from 'react'
import "./Footer.scss"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <div className='foot'>
 <div className='footer'>

    <div>
        <img src="https://preview.colorlib.com/theme/startup2/img/logo.png.webp" alt="" />
    </div>
    <div>
        <ul>
        <Link style={{textDecoration:'none',color:'white',fontSize:"17px"}} to="/">HOME</Link>
        <Link style={{textDecoration:'none',color:'white',fontSize:"17px"}} to="/add">ADD</Link>
        <Link style={{textDecoration:'none',color:'white',fontSize:"17px"}} to="/wishlist">WISHLIST</Link>
        </ul>
    </div>
    <div className='icon'>
        <div className='circle'><i class="fa-brands fa-facebook-f" style={{color: "#ffffff"}}></i></div>
        <div className='circle'><i class="fa-brands fa-twitter" style={{color: "#ffffff"}}></i></div>
        <div className='circle' ><i class="fa-brands fa-instagram" style={{color: "#ffffff"}}></i></div>
        <div className='circle'><i class="fa-brands fa-google-plus-g" style={{color: "#ffffff"}}></i></div>
        
    </div>
</div>

<div className='p'>

    <p>Copyright ©2024 All rights reserved | This template is made with  <i class="fa-regular fa-heart"></i> <span style={{color:'blue'}}>by Colorlib</span>

</p>
</div>
    
   </div>
  
  )
}

export default Footer