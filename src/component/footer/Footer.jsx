import React from 'react'
import './Footer.css'
import GitHub from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'
function Footer() {
    return (
        <>
            <div className="footer-container">
            <div className="blur blur-f1"></div>
            <div className="blur blur-f2"></div>
                <hr />
                <div className="footer">
                    <img src={GitHub} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer