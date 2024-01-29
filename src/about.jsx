import profile from '../src/assets/profile.jpg';
import hire from '../src/assets/hire.jpg';
import { Link } from 'react-router-dom';
import '../src/index.css'
import resume from'../src/assets/resume.pdf';

// File Name		:	about.jsx
// Student Name	:	Jinu Silpa Johnson
// Student Id		:	301405552
// Date			:	24-01-2024
export default function Home() {
     return <>
     {/* Self introduction and attched resume */}
     <section id="intro">
          <div className="introContent">
          <span className="hello">Hello,</span><br/>
          <span className="introText">I am <span className="introName">Jinu Silpa Johnson</span> 
          <img src={profile} alt="profile" className="bbg" width="500" height="500" align="right" />
          <br/>System Analyst</span>
          <p className="introPara">I am a skilled software developer who gather requirement,plan according to the requirement, design, implement and unit test the software.
          I have experience in Angular, C# and MS SQL. My duties are to gather requirement from the client ,design and implement the application that satisfies all needs of the client. As a system analyst my primary aim is to provide error free software to client.
</p>
          <Link><button className="btn"><img src={hire} alt="Hire me" width="100px" height="100px" onClick={() => window.open(resume)}/></button></Link>
          
          </div>
          
     </section>
    

     </>
     }
    