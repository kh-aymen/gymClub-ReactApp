import React from 'react'
import './Hero.css'
import Header from '../header/Header'
import Countup from 'react-countup'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
function Hero() {

    const transition = { type: 'spring', duration: 2.5 }

    const mobile = window.innerWidth <= 768 ? true : false
    return (
        <>
            <div className="blur blur-h"></div>
            <div className="hero">

                <div className="left-h">
                    <Header></Header>
                    <div className="hero-thebest">
                        <motion.div
                            initial={{ left: mobile ? '165px' : '238px' }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween' }}
                        ></motion.div>
                        <span>The best fitness club in the town</span>
                    </div>

                    <div className="hero-text">
                        <div>
                            <span className='stroke-text'>Shape </span>
                            <span>Your</span>
                        </div>
                        <div>
                            <span>Ideal Body</span>
                        </div>
                        <div>
                            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                        </div>
                    </div>


                    <div className="figures">
                        <div>
                            <span>+ <Countup start={0} end={140} duration={2.5} enableScrollSpy></Countup></span>
                            <span>expert couchs</span>
                        </div>
                        <div>
                            <span>+ <Countup start={0} end={987} duration={2.5} enableScrollSpy></Countup></span>
                            <span>members joined</span>
                        </div>
                        <div>
                            <span>+ <Countup start={0} end={50} duration={2.5} enableScrollSpy></Countup></span>
                            <span>fitness programs</span>
                        </div>
                    </div>

                    <div className="hero-buttons">
                        <button className='btn'>Get Started</button>
                        <button className='btn'>Learn More</button>
                    </div>


                </div>


                <div className="right-h">
                    <button className='btn'>Join Now</button>

                    <motion.div
                        transition={{ ...transition, type: 'tween' }}
                        initial={{ right: '-1rem' }}
                        whileInView={{ right: '4rem' }}
                        className="heart-rate">
                        <img src={Heart} alt="" />
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </motion.div>

                    <img src={hero_image} alt="" className='hero-image' />
                    <motion.img src={hero_image_back} alt="" className='hero-image-back'
                        initial={{ right: '11rem' }}
                        whileInView={{ right: '20rem' }}
                        transition={transition}
                    />

                    <motion.div className="calories"
                        initial={{ right: '37rem' }}
                        whileInView={{ right: '28rem' }}
                        transition={transition}
                    >
                        <img src={Calories} alt="" />
                        <div>
                            <span>Calories Burned</span>
                            <span>220 Kcal</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    );
}

export default Hero

