import React, { useState } from "react"
import './Contact.css'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from  '../../assets/mail-icon.png'
import phoneIcon from  '../../assets/phone-icon.png'
import locationIcon from  '../../assets/location-icon.png'
import white_arrow from  '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2377d1b8-7168-4aba-af8c-96cf4c437663");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    return (
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={msgIcon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact
                    information below. Your feedback, questions, and suggestion 
                    are important to us as we strive to provide exceptional service to our
                    university community.
                </p>
                <ul>
                    <li><img src={mailIcon} />Contact@edusity.dev</li>
                    <li><img src={phoneIcon} />+91 1234567891</li>
                    <li><img src={locationIcon} />493, kalpana nagar, Bhopal</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name="name" placeholder="Enter your name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
                    <label>Write your message here</label>
                    <textarea name="message" placeholder="Enter your message" rows="5" required></textarea>
                    <button type="submit" className="darkBtn">Send now<img src={white_arrow} alt=""/></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
