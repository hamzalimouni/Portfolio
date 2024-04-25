import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        setDone(false);
        emailjs.sendForm('service_75hh1up', 
                        'template_cjb4gc6', 
                        formRef.current, 
                        'CldMyiVoGgg5mEwMG')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss yout project</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +33 7 45 43 74 59
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        elyamounihamza1@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Paris, France
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333", borderBottom:darkMode && "1px solid #999"}} type="text" placeholder="Name" name="user_name"/>
                <input style={{backgroundColor: darkMode && "#333", borderBottom:darkMode && "1px solid #999"}} type="text" placeholder="Subject" name="user_subject"/>
                <input style={{backgroundColor: darkMode && "#333", borderBottom:darkMode && "1px solid #999"}} type="text" placeholder="Email" name="user_email"/>
                <textarea style={{backgroundColor: darkMode && "#333", borderBottom:darkMode && "1px solid #999"}} rows="5" placeholder="Message" name="message"></textarea>
                <button>Submit</button>
                {done && <span className="c-done">Sent successfull</span>}
            </form>
            </div>
        </div>
    </div>
)
}

export default Contact