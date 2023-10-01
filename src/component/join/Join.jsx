import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'
function Join() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2lrwc8k', 'template_ouiidz9', form.current, '44xkIq2og-wcCtEzr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className="join" id="join">
                <div className="left-j">
                    <hr />
                    <div>
                        <span className='stroke-text'>READY TO</span>
                        <span>LEVEL UP</span>
                    </div>
                    <div>
                        <span>YOUR BODY</span>
                        <span className='stroke-text'>WITH US?</span>
                    </div>
                </div>

                <div className="right-j">
                    <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                        <input type="email" placeholder='Enter Your Email' name='user_name' required />
                        <button className='btn btn-j'>Join Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Join