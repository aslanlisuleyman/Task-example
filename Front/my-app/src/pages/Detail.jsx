import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import "./Detail.css"
import {Helmet} from "react-helmet";
const Detail = () => {
    const[data,setData]=useState({})
    const {id}=useParams()
    useEffect(()=>{
    axios.get(`http://localhost:3001/product/${id}`).then(res=>{
        setData(res.data)
    })
    },[])
  return (
    <div className='detal'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Detail-Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
     <div> <img src={`${data.images}`} alt="" /></div>
        <div>


            <p>{data.name}</p>
        <p>{data.desci}</p> 
        </div>
       
    </div>
  )
}

export default Detail