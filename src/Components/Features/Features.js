import React from 'react'
import './Features.css'
import Card from './Card'
import data from './FeaturesApi'


const Features = () => {
  return (
   <>
   <section className='features top' id='features'>
    <div className='container'>
        <div className='heading'>
            <h4>How To Approach</h4>
            <h1>What I Do</h1>
        </div>
        <div className='content grid'>
            {data.map((val,index)=>{
                return<Card key={index}image={val.image}title={val.title}titlee={val.title1}/>
            })}
            
        </div>
    </div>
   </section>
   </>
  )
}

export default Features