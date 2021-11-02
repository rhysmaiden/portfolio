import React from "react";
import "./App.css";
function ContactMe() {
  return (
    <div className="contact-me">
      <h1>Contact Me</h1>
      <p>Phone: 0400033392</p>
      <p>Email: maidenrhys@gmail.com</p>

      <form>
        <input id="name" label="name" />
        <label for="name">Name</label>
        <input id="email" label="name" />
        <label for="email">Email</label>

        <input id="message" label="name" />
        <label for="message">Message</label>
        <button
          class="btn inverse submit"
          onClick={() => {
            window.open("mailto:maidenrhys@gmail.com");
            window.open(
              "mailto:maidenrhys@gmail.com?body=" +
                document.getElementById("message")
            );
          }}
        >
          <i class="fa fa-address-book"></i> Submit
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
