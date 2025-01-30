import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formStatus, setFormStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    event.persist();

    setFormStatus("Sending...");
    setIsSubmitting(true);

    const templateParams = {
      name: name,
      email: email,
      message: message
    };
    try {
      await emailjs.send("service_hnt0iu9", "template_3bmfn42", templateParams);
      setFormStatus("Sent!");
      setTimeout(() => setFormStatus(""), 5000);
    } catch (error) {
      console.error(error);
      setFormStatus("Failed to send. Please try again.");
      setTimeout(() => setFormStatus(""), 5000);
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h1>Contact Us</h1>
      <label htmlFor="name">Name *</label>
      <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <label htmlFor="email">Email *</label>
      <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
      <label htmlFor="message">Message</label>
      <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
      <button type="submit" disabled={isSubmitting}>Submit</button>
      <p>{formStatus}</p>
    </form>
  );
}