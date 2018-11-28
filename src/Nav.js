import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = props => {
   
    return (
        <div className='nav-wrapper'>
            <div className='nav'>
                <Link to='/'>
                    <img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg' alt='apple logo'   className='apple-logo'/>
                </Link>
                         
                {props.links.map((navlink) => (
                        <div  key={navlink.link} >
                            
                            <NavLink to={`/${navlink.link}`} key={navlink.id} className='nav-links'>
                            {navlink.link}
                            </NavLink>
                        </div>
                    ))}
                    <img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg' alt='search' className='logos-on-right'/>
                    <img src='https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg' alt='shopping bag' className='logos-on-right'/>
                {/* <i className=' logos-on-right fas fa-search fa-1x'></i> */}
                {/* <i className='logos-on-right fas fa-shopping-bag fa-1x'></i> */}
            </div>

            
        </div>
    );
}

export default Nav