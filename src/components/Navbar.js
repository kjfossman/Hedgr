import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <button className="btn"><NavLink 
                    to="/moneyline-hedge-simple" exact
                    className="inactive"
                    activeClassName={ "active" }
                    ><b>Simple Money Line</b>
                </NavLink></button>

                <button className="btn"><NavLink 
                    to="/spread-hedge-simple" exact
                    className="inactive"
                    activeClassName={ "active" }
                    ><b>Simple Spread Hedge</b>
                </NavLink></button>
                
            </div>
        );
    }
}

export default Navbar;