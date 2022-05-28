/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";

export default function Form() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7lwacah",
        "template_q2ofa9k",
        form.current,
        "6EgkpSBJzAKiuILeS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  }

  return (
    <body className="feedbck">
      <h1 className="title2 text-center">Feedback</h1>
      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="text-center">
          <input
            className="text-center "
            type="text"
            id="name"
            placeholder="Your Name"
            required
          ></input>

          <input
            className="text-center "
            type="email"
            id="email"
            placeholder="Email"
            required
          ></input>

          <textarea
            className=" text-center form-control"
            id="message"
            cols="30"
            rows="8"
            placeholder="Provide us your Honest Feedback, so we can improve on it"
            name="message"
          ></textarea>

          <button className="cta text-center mx-auto" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </body>
  );
}
