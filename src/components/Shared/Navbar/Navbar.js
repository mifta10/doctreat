import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
 
 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>

 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav ml-auto">
     <li className="nav-item active">
       <Link className="nav-link mr-5" to="/">Home <span className="sr-only">(current)</span></Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link mr-5" to="/about">About</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`} to="/reviews">Reviews</Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`} to="/blog">Blog</Link>
     </li>
     <li className="nav-item">
       <Link className={`nav-link mr-5 ${window.location.pathname === '/appointment' ? 'text-secondary' : 'text-white'} text-white`} to="#">Contact Us</Link>
     </li>
   </ul>
 </div>
</nav>
    </div>
  );
};

export default Navbar;