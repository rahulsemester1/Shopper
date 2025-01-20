import React from 'react';
import './Auth0.css'; 
import { useAuth0 } from "@auth0/auth0-react";
const { loginWithRedirect } = useAuth0();

const Auth0 = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">MyApp</a>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>
      </div>
    </nav>
  );
};

export default Auth0;
