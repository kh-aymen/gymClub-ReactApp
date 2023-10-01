import React from 'react'
import './Programme.css'
import { programsData } from '../../data/programsData'
import arrowimg from '../../assets/rightArrow.png'
function Programme() {
    return (
        <>
            <div className="programme" id="programs">
                <div className="programme-header">
                    <span className='stroke-text'>Explore our</span>
                    <span>Programs</span>
                    <span className='stroke-text'>to shape you</span>
                </div>

                <div className="program-categories">
                    {
                        programsData.map((item, index) => {
                            return (
                                <>
                                    <div className="category" key={index}>
                                        {item.image}
                                        <span>{item.heading}</span>
                                        <span>{item.details}</span>
                                        
                                        <div className="join-now">
                                        <span>Join Now</span>
                                        <img src={arrowimg} alt="" />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Programme