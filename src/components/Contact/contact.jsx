//name, email, message
//TODO create email validation regex or whatever in utils helpers
import {useState} from "react";
import {validateEmail} from "../../utils/helpers.js"

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
    };
    return;
}
setName("");
setEmail("");
setMessage("");


return (
    <div className="contact-form">
        <h2>Contact me:</h2>
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
            <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder="message"
            />
            <button type="submit">Send Message</button>
        </form>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
                </div>
        )}
    </div>
)
};
export default Contact;