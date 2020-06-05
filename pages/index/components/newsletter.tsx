import React, { useState } from "react";
import styles from "./newsletter.module.scss";

function Newsletter() {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {!!error && <span className={styles.error}>{error}</span>}

      {!error && success && (
        <strong className={styles.success}>
          <span className="accent">You are subscribed.</span> <br />
          Thank you for your interest in SafeSphere.
          <br />
          <br />
        </strong>
      )}

      <form
        method="POST"
        action="/api/newsletter"
        onSubmit={sendEmail}
        className={styles.newsletterForm}
      >
        <input
          type="email"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="button" disabled={loading}>
          Subscribe
        </button>
      </form>
    </>
  );

  async function sendEmail(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setError("");
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();

    if (data.success === true) {
      setSuccess(true);
      setEmail("");
    } else if (data.error) {
      setError(data.error);
    } else {
      alert("Subscription failed. Something wen wrong.");
    }
    setLoading(false);
  }
}

export default Newsletter;
