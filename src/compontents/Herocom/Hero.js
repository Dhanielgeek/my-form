import React from 'react'
import "./style.css"
import Pics from "./watch.png"

const Hero = () => {
  return (
    <div>
        <div className='main_hero'>
            <div className='hero_hold'>
                <div className='first_hold'>
                    <div className='title_con'> 
                         <h1>Smart Digital Watch For Luxurious Life.</h1></div>
                         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                         <div className='button_con'>
                            <div className='order'>Order Now</div>
                            <div className='watch'>Watch Video</div>
                         </div>
                </div>
                <div className='Second_hold'>
                    <div className='circlecon'>
                        <img src={Pics} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero