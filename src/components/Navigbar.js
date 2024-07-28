import React from 'react';
import {Link} from 'react-router-dom';
import './Navigbar.css';
const Navigbar = () => {
    return(
        <div className='navigbar'>
            <h1>My DashBoard</h1>
            <div className='navigbar-right'>
            <input type="text" placeholder='Search....' />
            <i className="fas fa-search search-icon"></i>
                <div className='navigbar-buttons'>
                    <Link to='/' className='Active'>Home</Link>
                    <Link to='/'>Login</Link>
                    <Link to='/'>Logout</Link>
                </div>
            </div>
        
        </div>
    );
};
export default Navigbar;