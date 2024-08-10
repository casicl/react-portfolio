//name, email, message
//TODO create email validation regex or whatever in utils helpers
import {useState} from "react";
import {validateEmail} from "../../utils/helpers.js"
import "./contact.css"

function Contact() {
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const [errorMessage, setErrorMessage]=useState("");


const handleInputChange = (event) => {
    const {target}=event;
    const inputType=target.name;
    const inputValue=target.value;

    if (inputType==="email") {
        setEmail(inputValue);
    } else if (inputType==="name") {
        setName(inputValue);
    } else {
        setMessage(inputValue);
    }
};

const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email) || !name || message) {
        setErrorMessage("Field cannot be blank")
    } else {
        setName("");
        setEmail("");
        setMessage("");
    }
   
};



return (
    <>
    <h3>Contact me:</h3>
      <div className="contact-form">
        
        <form className="form" onSubmit={handleFormSubmit}>
            <input
            value={name}
            name="name"
            type="text"
            onChange={handleInputChange}
            placeholder="Your name"
            />
            <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            />
            <textarea
            value={message}
            name="message"
            rows="10"
            cols="83"
            type= "text"
            onChange={handleInputChange}
            placeholder="message"
            
            
           
            />
            <button type="submit" style={{ display: 'flex', justifyContent: 'flex-end' }} >Send Message</button>
        </form>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
                </div>
              
        )}
   
    </div>
    </>
    

)
};
export default Contact;