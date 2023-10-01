import React, { useState } from 'react'
import './Testimonails.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'
function Testimonails() {

    const transition = { type: 'spring', duration: 5 }


    const [selected, setSelected] = useState(0)
    const tLenght = testimonialsData.length
    return (
        <>
            <div className="testimonails" id='testimonials'>
                <div className="left-t">
                    <span>testimonails</span>
                    <span className='stroke-text'>What they</span>
                    <span>say about us</span>

                    <motion.span
                        key={selected}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        translate={{ ...transition, duration: '5' }}
                    >
                        {testimonialsData[selected].review}
                    </motion.span>
                    <span>
                        <span style={{ color: 'var(--orange)' }}>
                            {testimonialsData[selected].name}
                        </span>
                        {" - "}
                        {testimonialsData[selected].status}
                    </span>

                </div>

                <div className="right-t">
                    <div></div>
                    <div></div>
                    <motion.img src={testimonialsData[selected].image} alt=""
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        translate={{ ...transition, duration: '5' }}

                    />
                    <div className="arrows">
                        <img src={leftArrow} alt="" onClick={() => {
                            selected === 0 ? setSelected(tLenght - 1) : setSelected((prev) => prev - 1)
                        }} />
                        <img src={rightArrow} alt="" onClick={() => {
                            selected === tLenght - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
                        }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonails