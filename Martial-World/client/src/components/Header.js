import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {


    render() {
        return (
            <div className="Header">
                <Link exact='true' to='/'>Return to list</Link>
            </div>
        )
    }
}

export default Header;