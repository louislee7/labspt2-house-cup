import React from 'react';
import { NavLink } from "react-router-dom";
import auth from '../auth';

class sideMenu extends React.Component {
   constructor(props) {
       super(props)
   }

    logout = () => {
        auth.logout();
        this.props.history.replace('/');
      }

    render() {
      
        return (
            <div className='side-menu'>
                <header>
                    <h1>House Cup Tracker</h1>
                </header>
                
                <NavLink to="/admin/schools" activeClassName="activeMenu" style={{ textDecoration: "none", color: "inherit" }}>
                    <h2>Schools</h2>
                </NavLink>

                <NavLink to="/admin/houses" activeClassName="activeMenu" style={{ textDecoration: "none", color: "inherit" }}>
                    <h2>Houses</h2>
                </NavLink>


                <NavLink to="/admin/billing" activeClassName="activeMenu" style={{ textDecoration: "none", color: "inherit" }}>
                    <h2>Billings</h2>
                </NavLink>

                <NavLink to="/admin/settings" activeClassName="activeMenu" style={{ textDecoration: "none", color: "inherit" }}>
                    <h2>Settings</h2>
                </NavLink>

              
                 <button onClick={() => {this.logout()}}>Sign Out</button>
             
            </div>);
    }
}

export default sideMenu;