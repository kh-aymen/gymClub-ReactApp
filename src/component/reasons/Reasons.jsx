import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
function Reasons() {
    return (
        <>
            <div className="reasons" id="whyus">
                <div className="left-r">
                    <div class="div1"><img src={image1} alt="" /></div>
                    <div class="div2"><img src={image2} alt="" /></div>
                    <div class="div3"><img src={image3} alt="" /></div>
                    <div class="div4"><img src={image4} alt="" /></div>
                </div>

                <div className="right-r">
                    <span>some reasons</span>
                    <div>
                        <span className='stroke-text'>why </span>
                        <span>choose us?</span>
                    </div>

                    <div className="details-r">
                        <div>
                            <img src={tick} alt=""></img>
                            <span>OVER 140+ EXPERT COACHS</span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
                        </div>
                        <div>
                            <img src={tick} alt=""></img>
                            <span>RELIABLE PARTNERS</span>
                        </div>
                        <span className='partners'>our partners</span>
                        <div className='img'>
                            <img src={nb} alt="" />
                            <img src={adidas} alt="" />
                            <img src={nike} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Reasons