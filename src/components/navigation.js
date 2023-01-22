import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="container">
            <Link to='/unughana/' className="navbar-brand navbar-center" style={{color: 'white'}}>uniGhana</Link>
            <Link to='/unughana/login'>Login</Link>
        </div>
    </nav>
    </>
  )
}

export default Navigation