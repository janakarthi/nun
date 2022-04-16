import {useRef,useState} from 'react';
import "./contact.css";
import email from "../Component/img/email.png";
import Address from "../Component/img/address.png";
import emailjs from "emailjs-com";

const Contact =()=>{
    const formRef =useRef();
    const [done, setDone] = useState(false);
    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_x79igbp', 'template_0jk011w', formRef.current, 'B6196ayHVqUL1bSqA')
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
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info-item">
                <img className="c-icon" src={email}/> contact@nunorigin.com
            </div>
            <div className="c-info-item">
                <img className="c-icon" src={Address}/> Pondicherry
            </div>
            </div>
            <div className="c-right">
                <div className="c-right-sty"> 
                <p className="c-desc">
                    <b>Whats your story? </b> Get in tuch. We are always availabel for 24*7 if the right project come along.
                    </p>
                     <form ref={formRef} onSubmit= {handleSubmit}>
                        <input type="text" placeholder="Name" name="name"/>
                        <input type="text" placeholder="Subject" name="Subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && "Thank You"}
                    </form>
                    </div>
                
            </div>
        </div>
        
        </div>
    )
}
export default Contact;