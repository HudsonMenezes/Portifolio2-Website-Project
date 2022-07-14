import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {
 
  const form = useRef();

  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fwrpme4', 'template_3ymsxwe', form.current, 'y1denj5mr-2TWCVzF')
    .then(
      (result) => {
        console.log(result.text);
        setDone(true);
        form.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span>Entre em contato</span>
          <span>Me envie uma mensagem!</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Seu nome"/>
          <input type="email" name="user_email" className="user" placeholder="Seu melhor email"/>
          <textarea name="message" className="user" placeholder="Mensagem"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Obrigado pela mensagem! Irei responder em breve!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;