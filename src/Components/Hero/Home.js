import React from 'react'
import "./Home.css"
import hero from "../pic/hero.jpg"

import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <>
    <section className='hero' id='home'>
    <div className='container f_flex top'>
        <div className='left top'>
            <h3>welcome to our page</h3>
            <h1>Hi I'm <span>Sakthivel Raj</span></h1>
            <h2>
                <span>
                <Typewriter words={['Student At SKCET', 'This Is My Application', 'Using CSS/JS']}
            loop cursor cursorStyle='<>' typeSpeed={50} deleteSpeed={30} delaySpeed={1000} /></span>
            </h2>
            <h3>Have A Nice Day</h3>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                  <i class="fa fa-facebook" aria-hidden="true" ></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fa fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                  <i class="fa fa-github" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home