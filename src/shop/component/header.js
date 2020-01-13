import React from 'react'
import Grid from "./headder/grid";
import List from "./headder/list";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <React.Fragment>  
          <div className="container">     
            <div className="nav justify-content-end flex-box nav-top">
                <NavLink exact to="/" activeClassName="grid-active"><Grid /></NavLink>
                <NavLink to="/list" activeClassName="list-active"><List /></NavLink>
            </div>    
          </div>
        </React.Fragment>    
    );
  }

export default Header
