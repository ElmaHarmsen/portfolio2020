import React from 'react';
import '../Contact.scss';

function Contact(props) {
  return (
    <section className={props.isContactOpen ? "Contact open" : "Contact"}>
      <div className="contact-content">
        <div className="contact-header">
          <div className="contact-close" onClick={props.closeContact}>
            <span></span>
            <span></span>
          </div>
          <h2>Hej there! Please use one of these and let's have a talk.</h2>
        </div>
        <div className="contact-info">
          <a href="https://drive.google.com/file/d/12nMt10qPcNYyFJ9FUwosLf1GufMhQjxD/view?usp=sharing" target="blank">
            <h3>My Resume/CV</h3>
          </a>
          <h3 className="sm-visible">elmaharmsen01<br></br>@gmail.com</h3>
          <a href="mailto:elmaharmsen01@gmail.com"><h3 className="md-visible">elmaharmsen01@gmail.com</h3></a>
          <a href="mailto:elmaharmsen01@gmail.com"><h3 className="lg-visible">elmaharmsen01@gmail.com</h3></a>
          <a href="https://www.linkedin.com/in/elma-harmsen-087872181/" target="blank">
            <h3>LinkedIn</h3>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;