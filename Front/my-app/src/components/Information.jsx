import React from 'react'
import "./Information.scss"
import { Link } from 'react-router-dom'
const Information = () => {
  return (
    <div className='information'>


      <div className='overlay'>

<div className='headerr'>

<div>
    <img src="https://preview.colorlib.com/theme/startup2/img/logo.png.webp" alt="" />
</div>
<div>
    <ul>
    <Link style={{textDecoration:'none',color:'white',fontSize:"18px"}} to="/">HOME</Link>
    <Link style={{textDecoration:'none',color:'white',fontSize:"18px"}} to="/add">ADD</Link>
    <Link style={{textDecoration:'none',color:'white',fontSize:"18px"}} to="/wishlist">WISHLIST</Link>
    </ul>
</div>
<div className='helloo'>
    <p>Say Hello</p>
</div>
</div>
          
           
        <div><h1>Startup you can build a <br /> website online using the <br /> Bootstrap builder.</h1></div>
      
        <div>
             <a href="/" class="bn19"> <span>About Us</span></a>
          </div>


      </div>
           

    </div>
  )
}

export default Information