import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uxvayxm', 'template_1tx46se', form.current, '-lV25juPBU4cSJY2q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
      <section id="Contact" className="contact--section">
        <div>
          <p className="sub--title">Get In Touch</p>
          <h1>Contact Me</h1>
        </div>
        <form ref={form} onSubmit = {sendEmail} className="contact--form--container">
          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">First Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="first-name"
                id="first-name"
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">Last Name</span>
              <input
                type="text"
                className="contact--input text-md"
                name="last-name"
                id="last-name"
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">Email</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                required
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md">Phone Number</span>
              <input
                type="number"
                className="contact--input text-md"
                name="phone-number"
                id="phone-number"
                required
              />
            </label>
          </div>
        
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              name="message"
              id="message"
              rows="8"
              placeholder="Type your message..."
            />
          </label>

          <div>
           <input type="Submit" value="Send" />
          </div>
        </form>
      </section>
    );
  }