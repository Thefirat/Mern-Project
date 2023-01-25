import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLock, faPhone, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons'
import '../../pages/home/home.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

    //For logout button
    const navigate = useNavigate();

    const userInfo = localStorage.getItem("userInfo");


    const signouthandler = () => {
        localStorage.removeItem("userInfo");
        alert("You have successfully logged out!!");
        navigate("/login");
    }

    return (
        <div className='header-row'>
            <div className="header-top">
                <span><FontAwesomeIcon icon={faPhone} />+76/0000000</span>
                <span><FontAwesomeIcon icon={faEnvelope} />mernETecnology@gmail.com</span>

            </div>
            <div className="header-menu">
                <div className="header-logo">
                    <Link to="/"><h2 className="header-logo-title">MernTecnology</h2> </Link>
                </div>

                <div className="header-nav">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/shop" activeClassName="active">Shop</NavLink>
                    <NavLink to="/sellers" activeClassName="active">Sellers</NavLink>
                </div>

                <div className="header-action">
                    <Link to="/account"><FontAwesomeIcon icon={faHome} /></Link>
                    <Link to="/follow"><FontAwesomeIcon icon={faUser} />
                        <span className='header-cart-badge'>0</span></Link>
                    <Link to="/cart"><FontAwesomeIcon icon={faShoppingBag} />
                        <span className='header-cart-badge'>0</span>
                    </Link>
                    {
                        userInfo ? (<span className='logout' onClick={signouthandler}><FontAwesomeIcon icon={faLock} />Logout</span>) : (<Link to="/login"><FontAwesomeIcon icon={faLock} />Login</Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Header 