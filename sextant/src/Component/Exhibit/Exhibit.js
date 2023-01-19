import React from 'react';

const Exhibit = (props) => {
  return (
    <div className="exhibit">
      <img src={props.imageUrl} alt={props.imageAlt}></img>
      <h1 className="exhibit__heading">{props.heading}</h1>
      <div className='data_points'>
        <div className="exhibit__contentv1">{props.childv1}</div>
        <div className="exhibit__contentv2">{props.childv2}</div>
      </div>
    </div>
  );
}

export default Exhibit;
