import React from 'react'
import { Link } from 'react-router-dom'

function Navigation1() {
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="container">
            <a href="index.html" className="navbar-brand navbar-center" style={{color: 'white'}}>uniGhana</a>
            <Link to='/'>Back</Link>
        </div>
    </nav>
    </>
  )
}

export default Navigation1