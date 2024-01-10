import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"

const Header = () => {
  return (
    <div className='header'>

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
        <div className='hello'>
            <p>Say Hello</p>
        </div>
    </div>
  )
}

export default Header