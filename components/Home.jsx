import start from '../src/assets/start.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
// File Name		:	home.jsx
// Student Name	:	Jinu Silpa Johnson
// Student Id		:	301405552
// Date			:	24-01-2024

export default function Home() {
     return <>
     {/* Welcome Page of My Portfolio */}
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello Everyone,</span><br/>
          <span className="introText">Welcome to <span className="introName">My Portfolio</span></span>
          
          <p className="introPara">I am a software developer that welcomes challenges and architects solutions.</p>
     <Link to="/about"><button className="btn"><img src={start} alt="Hire me" width="100px" height="100px" /></button></Link> 

          </div>
          
     </section>
    

     </>
     }
    