import { useState } from "react";

function Contact() {

  const [contact, setContact] = useState({

    name: "",

    email: "",

    message: ""

  });

  const [success, setSuccess] = useState(false);

  function handleChange(e) {

    setContact({

      ...contact,

      [e.target.name]: e.target.value

    });

  }

  function handleSubmit(e) {

    e.preventDefault();

    if (

      !contact.name.trim() ||

      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email) ||

      !contact.message.trim()

    ) {

      return;

    }

    setSuccess(true);

    setContact({

      name: "",

      email: "",

      message: ""

    });

  }

  return (

    <div className="narrow">

      <h1>Contact Us</h1>

      <form className="panel form" onSubmit={handleSubmit}>

        <label>Name</label>

        <input

          name="name"

          value={contact.name}

          onChange={handleChange}

          placeholder="Enter your name"

          required

        />

        <label>Email</label>

        <input

          type="email"

          name="email"

          value={contact.email}

          onChange={handleChange}

          placeholder="Enter your email"

          required

        />

        <label>Message</label>

        <textarea

          name="message"

          value={contact.message}

          onChange={handleChange}

          placeholder="Enter your message"

          rows="5"

          required

        />

        {success && (

          <p className="success">

            Your message has been submitted successfully!

          </p>

        )}

        <button className="btn primary">

          Submit

        </button>

      </form>

    </div>

  );

}

export default Contact;