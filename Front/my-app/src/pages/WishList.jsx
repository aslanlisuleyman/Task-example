import React, { useContext } from 'react'
import Maincontext from '../context/context'
import { Toaster } from 'react-hot-toast'
import {Helmet} from "react-helmet";

const WishList = () => {
    const{wishListItems,removeFromWishlist,handleDelete}=useContext(Maincontext)
  return (
    <div style={{marginBottom:'130px'}}>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist-Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <button onClick={handleDelete} style={{backgroundColor:'red',color:'white',width:'100px',height:'45px',borderRadius:'10px',marginTop:'40px',marginLeft:'87%'}} >Delete All</button>

     <div style={{display:'flex' ,justifyContent:'center',paddingTop:'100px',gap:'50px',height:'250px'}}>
        { wishListItems.map((item,index)=>{
            return  <div style={{width:'250px',height:"250px",textAlign:'center',gap:'15px',display:'flex',flexDirection:'column',gap:'15px',border:'1px solid red',borderRadius:'15%',paddingTop:'20px'}}> <div>
                <img style={{width:'35px'}} src={item.images} alt="" />
                </div>
                <div>{item.name}</div>
                <div>{item.desci}</div>
                <div><button onClick={()=>{
                 removeFromWishlist(item._id)
                }} style={{backgroundColor:'red',color:'white',width:'90px',height:'35px',borderRadius:'10px'}}>Delete</button></div>
               
                </div>
            
        })}
    </div>
    
    </div>
   
  )
}

export default WishList