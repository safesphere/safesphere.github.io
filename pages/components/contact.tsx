import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.scss";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={sendEmail}
      className={styles.contactForm}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className={styles.error}>
        {errors.find((e) => e === "name") ? "Your name is required" : ""}
      </span>

      <input
        type="email"
        name="email"
        placeholder="E-mail address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <span className={styles.error}>
        {errors.find((e) => e === "email") ? "E-mail address is invalid" : ""}
      </span>

      <input
        type="tel"
        name="phone"
        placeholder="Phone no."
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <span className={styles.error}></span>

      <input
        type="text"
        name="message"
        placeholder="How can we help?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <span className={styles.error}>
        {errors.find((e) => e === "message")
          ? "Please fill in your message"
          : ""}
      </span>

      <br />

      {success ? (
        <strong className={styles.success}>
          <span className="accent">Your message was sent.</span> <br />
          Thank you for getting in touch.
        </strong>
      ) : (
        <button type="submit" className="button" disabled={loading}>
          Contact Us
        </button>
      )}
    </form>
  );

  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setErrors([]);

    emailjs.sendForm("service_aux9q8h", "contactform", e.currentTarget, "7JhZZoK59ZPor12pY")
      .then((result) => {
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }, (error) => {
        setErrors(error.text);
      });

    setLoading(false);
  }
}

export default Contact;
