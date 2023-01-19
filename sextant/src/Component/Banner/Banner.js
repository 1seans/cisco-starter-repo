import React from 'react'
import './Banner.css'

const Banner = (props) => { 
  return (
    <div className= 'banner'>
        <h1 className="title">{props.title}</h1>
        {/* <img src={props.imageUrl} alt={props.imageAlt} /> */}
    </div>
  )
}
export default Banner
