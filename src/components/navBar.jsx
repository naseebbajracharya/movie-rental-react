import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../icon/movie-rental-logo.png';
import '../App.css';

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            {/* <Link className="navbar-brand" to="/">Movie-Retal App</Link> */}
            <Link className="navbar-brand" to="/">
                <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
                Movie-Rental App
            </Link>
  
            {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                    <NavLink className="nav-link" to="/movies">Movies</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/customers">Customers</NavLink>
                </li>
                </ul>
                
            </div> */}

            <div className="d-flex flex-column flex-md-row align-items-center">
            
            <nav className="my-2 my-md-0 mr-md-3">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/movies">Movies</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/customers">Customers</NavLink>
                    </li>

                </ul>
            </nav>
            <NavLink className="btn btn-outline-info" to="/login">Login</NavLink>
            </div>
        </div>
  
    </nav>
        
        
     );
}
 
export default NavBar;