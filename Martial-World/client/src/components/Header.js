import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {


    render() {
        return (
            <div className='header-container'>
                <div className='header'>
                    <h1>The Martial World</h1>
                    <Link id='header-text-one' className='text-art' exact='true' to='/'>Return to list</Link>
                </div>
            </div>    
        )
    }
}

export default Header;