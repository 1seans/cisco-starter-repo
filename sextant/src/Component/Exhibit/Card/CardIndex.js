import React from 'react'
import './CardIndex.css'
import Exhibit from '../Exhibit';

const Card = (props) => {
  return (
   <div className="card">
     <Exhibit 
     imageUrl="#"
     heading="Header"
     childv1="Data Point 1"
     childv2="Data point 2"
     />
      <button><a href='#'>Click Me</a></button>
    </div>
  );
}
  
export default Card;
