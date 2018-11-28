import React from 'react';
import { Link } from 'react-router-dom';


const SubNav = props => {
    
    const sublink = props.links.find(item => item.link  === props.match.params.name);
    let darkMode = sublink === 'iPhone' || 'TV';
    let activeclass = 'sub-nav-wrapper';
    if(darkMode === true) {
        activeclass = ' sub-nav-wrapper darkmode'
    }
    
    return (
        <div className={activeclass}>
            <div className='sub-nav'>
                {sublink.subLink.map(item => 
                
                    <div  key={item.product} >
                        <Link to={`/${sublink}`}className='sub-nav-links' >
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