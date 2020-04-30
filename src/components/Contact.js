import React from 'react';
import '../Contact.scss';

function Contact(props) {
  return (
    <section className={props.isContactOpen ? "Contact open" : "Contact"}>
      <div className="contact-content">
        <h1 className="contact-header">please use one of these and let's have a talk!</h1>
        <div className="contact-info">
          <h1><span>(+31)</span> 06 23957767</h1>
          <h1>elmaharmsen<span>01</span> @gmail.com</h1>
          <h1>Elma Harmsen
            <span> at</span> LinkedIn</h1>
        </div>
      </div>
    </section>
  );
}

export default Contact;