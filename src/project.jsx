import speridian from '../src/assets/speridian.png';
import sentiment from '../src/assets/sentiment.jpg';
import adoption from '../src/assets/adoption.jpg';
import bank from '../src/assets/bank.png';
import React, { useState } from 'react';
import '../src/index.css'
import '../src/project.css'

// File Name		:	project.jsx
// Student Name		:	Jinu Silpa Johnson
// Student Id		:	301405552
// Date				:	24-01-2024
export default function Project() {
     // Hide and display project lists
     const [isVisible, setVisible] = useState(false)

     let onHideShowClick = () =>{
         setVisible(!isVisible)
     }
          return <>
     
     <section id="works">
         
          <h2 className="worksTitle">My Projects</h2>
          <span className="worksDesc">I am the kind of person of perfection. I will give importance to produce error free product. I will spent my whole time for detailing and will produce in a timely manner.</span> 
          <div className="worksImgs">
                   <img src={speridian} alt="speridian" className="worksImg" />
                   <img src={sentiment} alt="sentiment" className="worksImg" />
                   </div>
                   <div className='worksContent'>
                   <span>The service associated with creating, building, and maintaining websites and web applications that run online on a browser. It include web design, web programming, and database management.</span>                   
                   <span>The service associated with creating, building, and maintaining websites and web applications that run online on a browser. It include web design, web programming, and database management.</span>                   

                   </div>
                   <div className="worksImgss" style={{display: (isVisible) ? '' : 'none'}}>
                   <img src={adoption} alt="adoption" className="worksImg" />
                   <img src={bank} alt="bank" className="worksImg" />
                   </div>
                   
               
<div>
     {/* button name visible based on isVisible */}
<button className="workBtn" onClick={onHideShowClick}>{(isVisible) ? 'See Less' : 'See More'}</button>
</div>
                  
                  
     </section>
    

     </>
    }
    