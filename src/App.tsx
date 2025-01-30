import { useState } from "react";
import emailjs from "@emailjs/browser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formStatus, setFormStatus] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    event.persist();

    setFormStatus("Sending...");

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
      return;
    }
  };

  return (
    <>
      <img src="miners.png" className="background-image"></img>
      <div className="landing-page">
        <img src="mutant_mines_text_logo.png"></img>
        <h3>by 4 The Boys&trade;</h3>
        <section>
          <h1>What is <i>Mutant Mines?</i></h1>
          <p>
            You are an ambitious and slightly desperate spelunker in a four-man excavation team. The caverns promise their 
            riches in the form of mutanite, a rare and valuable mineral. Unbeknownst to you, the caverns are home to a 
            variety of dangerous creatures who aren't too happy about your presence.
          </p>
          <p>
            Enter the mines, fill your quota of mutanite, and get out alive. Offensive means are limited—the mining company 
            isn't sponsoring you to go in guns blazing, after all. Instead, you'll have to use your wits and the environment 
            to your advantage. Learn your enemies and their behaviors. Cleverly navigate the cramped corridors. Lay traps 
            to slow and suppress your mutant pursuers. And, of course, don't forget to mine.
          </p>
          <p>
            Should you perish in the mines below (and you will), whether by running out of oxygen or succumbing to the monsters,
            you'll be resurrected as a mutant yourself—bringing on a new set of challenges.
          </p>
          <p>
            Will you be able to make your wealth in mutanite? Or will you become just another casualty of the mines? Find out
            today in <i>Mutant Mines!</i>
          </p>
        </section>
        <section>
          <h1>About 4 The Boys&trade;</h1>
          <div>
            <img src="4_the_boys_logo.png"></img>
            <p>
              4 The Boys&trade; is a group of talented individuals working to make games tailored "for the boys." We're currently 
              developing our first title <i>Mutant Mines</i> as a group project at Brigham Young University (BYU). We appreciate you 
              checking out our game and hope you enjoy it!
            </p>
          </div>
        </section>
        <section>
          <h1>Tell Us What You Think!</h1>
          <p>
            We're looking to gauge interest in our new game, <i>Mutant Mines.</i> We'd love it if you took a short survey to 
            tell us what you think! Your feedback is invaluable to us as we continue to develop the game.
          </p>
          <a href="https://forms.gle/TGF4GNFe8cmWNFRD7" target="_blank">Take the survey <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <label htmlFor="name">Name *</label>
            <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
            <label htmlFor="email">Email *</label>
            <input id="email" type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            <label htmlFor="message">Message</label>
            <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
            <button type="submit">Submit</button>
            <p>{formStatus}</p>
          </form>
        </section>
      </div>
    </>
  );
}
