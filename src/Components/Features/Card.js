import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className='content grid'>
            <div className='box btn_shadow'>
                <img src={props.image}alt=''/>
                <h2>{props.title}</h2>
                <p>{props.title}</p>
                <p>    
                </p>
                <a href='#contact'><i className='fa fa-arrow-right'></i></a>
            </div>
            </div>
           
            
    </>
  )
}

export default Card