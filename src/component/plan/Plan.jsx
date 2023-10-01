import React from 'react'
import './Plan.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
function Plan() {
    const arrow = '-->'
    return (
        <>
            <div className="plan-container" id='plan'>
                <div className="blur blur-p1"></div>
                <div className="blur blur-p2"></div>
                <div className="programme-header" style={{ gap: '2rem' }}>
                    <span className='stroke-text'>READY TO START</span>
                    <span>YOUR JOURNEY</span>
                    <span className='stroke-text'>NOW WITHUS</span>
                </div>

                <div className="plans">
                    {
                        plansData.map((item, index) => {
                            return (
                                <>
                                    <div className="plan" key={index}>
                                        {item.icon}
                                        <span>{item.name}</span>
                                        <span>$ {item.price}</span>

                                        <div className="features">
                                            {
                                                item.features.map((feature, i) => {
                                                    return (
                                                        <>
                                                            <div className="feature" key={i}>
                                                                <img src={whiteTick} alt="" />
                                                                <span>{feature}</span>

                                                            </div>
                                                        </>
                                                    )
                                                })

                                            }

                                        </div>
                                        <div>
                                            <span>See more benefits {arrow}</span>

                                        </div>
                                        <button className="btn">
                                            Join now
                                        </button>
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

export default Plan