import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
function Header() {

    const mobile = window.innerWidth <= 768 ? true : false

    const [menuOpned, setMenuOpned] = useState(false)
    return (
        <>
            <div className="header" id='home'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>

                {menuOpned === false && mobile === true ? (
                    <div
                        style={{ backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px' }}
                        onClick={() => { setMenuOpned(true) }}
                    >
                        <img src={bars} alt=""
                            style={{ width: '1.5rem', height: '1.5rem' }}
                        />
                    </div>
                ) :
                    <ul className='header-menu'>
                        <li> <Link
                            onClick={() => { setMenuOpned(false) }}
                            activeClass='aclive'
                            to='home'
                            spy={true}
                            smooth={true}
                        >Home
                        </Link> </li>  
                        <li> <Link
                            onClick={() => { setMenuOpned(false) }}
                            to='programs'
                            spy={true}
                            smooth={true}
                        >Programs
                        </Link> </li>
                        <li> <Link
                            onClick={() => { setMenuOpned(false) }}
                            to='whyus'
                            spy={true}
                            smooth={true}
                        >Why us
                        </Link> </li>
                        <li> <Link
                            onClick={() => { setMenuOpned(false) }}
                            to='plans'
                            spy={true}
                            smooth={true}
                        >Plans
                        </Link> </li>
                        <li> <Link
                            onClick={() => { setMenuOpned(false) }}
                            to='testimonials'
                            spy={true}
                            smooth={true}
                        >Testimonials
                        </Link> </li>
                    </ul>
                }

            </div>
        </>
    );
}

export default Header