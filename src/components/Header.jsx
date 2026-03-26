import React from 'react';
import { Link } from 'react-router-dom';

import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineStarOutline } from "react-icons/md";
import { PiBag } from "react-icons/pi";

import '../style/header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-inner">

                {/* Left - Search */}
                <div className="header-left">
                    <button className="search-btn"><IoSearchOutline className='searchIcon' /></button>
                </div>

                {/* Center - Logo */}
                <h1 className="header-center">
                    <Link to="/" className="logo">
                        ÉCLaT
                    </Link>
                </h1>

                {/* Right - Menu */}
                <div className="header-right">
                    <Link to="/wishlist"><MdOutlineStarOutline /></Link>
                    <Link to="/cart"><PiBag /></Link>
                    <Link to="/login" className='login'>Login/Signup</Link>
                </div>

            </div>
        </header>
    );
};

export default Header;
