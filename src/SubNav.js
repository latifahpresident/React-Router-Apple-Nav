import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = props => {
    
    const sublink = props.links.find(item => item.link  === props.match.params.name);
    
    let darkMode = sublink.link === 'iPhone' || sublink.link === 'TV';
    let activeClass = 'sub-nav-wrapper';
    if(darkMode === true) {
        activeClass = 'darkmode'
    }
    
    let darkModeLink = 'sub-nav-links';
    if(darkMode === true) {
        darkModeLink = 'dark-mode-links'
    }
    return (
        <div className={activeClass}>
            <div className='sub-nav'>
                {sublink.subLink.map(item => 
                
                    <div  key={item.product} >
                        <Link to={`/${sublink}`}className={darkModeLink} >
                            <div className='sub-nav-img'> 
                                <img className='sub-nav-link-img' src={item.image} alt={item.product} />
                            </div>
                            <p className='link'>{item.product}</p>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SubNav