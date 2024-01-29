import web from '../src/assets/web.jpg';
import mobile from '../src/assets/mobile.jpg';
import React, { useState } from 'react';
import '../src/index.css'
import '../src/project.css'

// File Name		:	service.jsx
// Student Name		:	Jinu Silpa Johnson
// Student Id		:	301405552
// Date				:	24-01-2024
export default function Service() {
          // Hide and display service lists

     const [isVisible, setVisible] = useState(false)

     let onHideShowClick = () =>{
         setVisible(!isVisible)
     }
          return <>
     
     <section id="works">
         
          <h2 className="worksTitle">Services</h2>
          <span className="worksDesc">My services are my knowledge and achivements.</span> 
          <div className="worksImgs">
                   <img src={web} alt="speridian" className="worksImg" /></div>
<span>The service associated with creating, building, and maintaining websites and web applications that run online on a browser. It include web design, web programming, and database management.</span>                   
                   
                   <div className="worksImgss" style={{display: (isVisible) ? '' : 'none'}}>
                   <img src={mobile} alt="mobile" className="worksImg" />
                   </div>
                   <span style={{display: (isVisible) ? '' : 'none'}}>
                    Encompassing all the processes involved in the organization to a mobile app</span>
                   
               
<div>
          {/* button name visible based on isVisible */}

<button className="workBtn" onClick={onHideShowClick}>{(isVisible) ? 'See Less' : 'See More'}</button>
</div>
                  
                  
     </section>
    

     </>
    }
    