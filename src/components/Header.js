import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div id="menu">       
            <ul className="links">
                <li><NavLink to="/" exact={true} activeClassName="is-active">HomePage</NavLink></li>
                <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
                <li><NavLink to="/portfolio" exact={true} activeClassName="is-active">Portfolio</NavLink></li>
            </ul>
        </div>
    </header>
);

export default Header;