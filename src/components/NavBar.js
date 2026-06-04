// import React, { Component } from 'react'

import { Link } from "react-router-dom";

// export class Navbar extends PureComponent { //class based component uses render method to return jsx
//     render() {
//         return (
const NavBar = () => { //function based component returns jsx directly

    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsPanda</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    
                    {/* <i className="nav-item"><a nk className="nav-link" to="/">About</a></i> */}
                    <li className="nav-item"><Link className="nav-link active" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/general">General</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link active" to="/technology">Technology</Link></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }

export default NavBar





