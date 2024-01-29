import '../src/contact.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// File Name		:	contact.jsx
// Student Name		:	Jinu Silpa Johnson
// Student Id		:	301405552
// Date				:	24-01-2024
export default function Contact() {

    // Navigate to home screen
const navigate = useNavigate();
const onClickHandler = () => navigate(`/`);
          return (
     <>
     <p><b>Contact</b></p>
	 {/* on form submit redirecting to home page */}
     <form id="ffp" onSubmit={onClickHandler}>
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				<label htmlFor="myNumber"> *Contact No: </label>
				<input type="number" id="myNumber" name="myNumber" required="required" /> <br /> <br />
				<label htmlFor="myMessage"> *Message: </label>
				<textarea type="text" id="myMessage" name="myMessage" rows="3" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
		
		</form> <br></br>
          <p><i>Call me on: <strong>437.669.1548 </strong></i></p>
          <p>Email : <a>jinushilpa002@gmail.com</a></p>
          <p>Address:24 Fawnridge Trail</p>

     </>
     );
     }
    