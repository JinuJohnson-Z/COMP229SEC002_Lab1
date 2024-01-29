import '../src/education.css'
import university from '../src/assets/university.png'
import iti from '../src/assets/iti.png'
import kerala from '../src/assets/kerala.jpg'

// File Name		:	education.jsx
// Student Name	:	Jinu Silpa Johnson
// Student Id		:	301405552
// Date			:	24-01-2024
export default function Education() {
     return (
     <>
     {/* Listing Qualification */}
     <section id="education">
     <span className="educationTitle">Who I Am</span>
         <div className="educationBar">
               <img src={university} alt="WebDesign" className="educationBarImg" />
               <div className="educationBarText">
               <h2>University Of Kerala</h2>
               <p>Master Of Computer Application</p>
               <p>Bachelore Of Computer Application</p>
               </div>

          </div>
          <div className="educationBar">
               <img src={iti} alt="WebDesign" className="educationBarImg" />
               <div className="educationBarText">
               <h2>Industrial Training</h2>
               <p>Computer Operator And Programming Assistant</p>
                              </div>

          </div>
          <div className="educationBar">
               <img src={kerala} alt="WebDesign" className="educationBarImg" />
               <div className="educationBarText">
               <h2>Board Of Kerala</h2>
               <p>Plus Two</p>
               <p>SSLC</p>
               </div>

          </div>
    </section>
     </>
     );
     }
    