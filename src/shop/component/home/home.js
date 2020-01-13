import React from 'react';
import {NavLink} from "react-router-dom";

class Homepage extends React.Component{
    render() {
        return(
            <div className="container head-main nav-top ">     
            <div className="nav justify-content-start flex-box">
                <div className="head-info">
                <NavLink 
                    exact
                    to="/" 
                    activeClassName="grid-active">
                    Home
                </NavLink>
                <span><span> / </span>{this.props.name}
                </span>
                </div>
            </div>    
          </div>
        );
    }
}

export default Homepage