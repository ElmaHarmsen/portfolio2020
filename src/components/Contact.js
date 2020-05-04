import React from 'react';
import '../Contact.scss';

function Contact(props) {
  return (
    <section className={props.isContactOpen ? "Contact open" : "Contact"}>
      <div className="contact-content">
        {/* <div className="contact-close">
          <span></span>
          <span></span>
        </div> */}
        <h2 className="contact-header">Hey there, please use one of these and let's have a talk<span>!</span></h2>
        {/* <div className={props.isContactOpen ? "contact-menu close" : "contact-menu"} >
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        <div className="contact-info">
          <h2><span>(+31)</span> 06 23957767</h2>
          <span className="line-inbetween"></span>
          <h2>elmaharmsen<span>01</span> @gmail.com</h2>
          <span className="line-inbetween"></span>
          <a href="https://www.linkedin.com/in/elma-harmsen-087872181/" target="blank"><h2>Elma Harmsen <br></br>
            <span>at</span> LinkedIn</h2></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;