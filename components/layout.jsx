import React from 'react';
import { Link } from 'react-router-dom';
import program from '../src/assets/program.jpg';
import '../src/index.css'
// File Name		:	layout.jsx
// Student Name	:	Jinu Silpa Johnson
// Student Id		:	301405552
// Date			:	24-01-2024

export default function Layout() {
 return (
 <>
 {/* Links and headers */}
 <div className="header">
 < img src={program} alt="football" className="football" width="200px" height="200px"/>
 <h1>My Portfolio</h1>
 </div>
 <nav>
    
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/service">Service</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
 </>
 
 );
}
