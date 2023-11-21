import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_contactTime: contactTime,
      message,
    };

    try {
      const response = await emailjs.send(
        "service_3bzc1em",
        "template_e987548",
        templateParams,
        "CA21DJWdWGMDxWlJi"
      );

      console.log(response);

      setName("");
      setEmail("");
      setPhone("");
      setContactTime("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="contact">
      <h2 className="text-center">Contact us</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactTime">Best Time to Contact</label>
          <input
            type="text"
            id="contactTime"
            name="contactTime"
            value={contactTime}
            onChange={(e) => setContactTime(e.target.value)}
            placeholder="Enter the best time to contact you"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          />
        </div>
        <div className="form-group">
          <button type="submit" className="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
