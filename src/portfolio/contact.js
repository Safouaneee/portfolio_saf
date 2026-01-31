import { useState } from "react";
import axios from "axios";

function Contact() {

  const [errors, setErrors] = useState({});

  const validate = (data) => {
    let errs = {};

    if (!data.nom.trim()) errs.nom = true;
    if (!data.email.trim()) errs.email = true;
    if (!data.num.trim()) {
      errs.num = true;
    } else if (!/^\d+$/.test(data.num)) {
      errs.num = true;
    }
    if (!data.texte.trim()) errs.texte = true;

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      nom: document.getElementById("nom").value,
      email: document.getElementById("email").value,
      num: document.getElementById("num").value,
      texte: document.getElementById("texte").value
    };

    const validationErrors = validate(data);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length !== 0) return;

    try {
      await axios.post("http://localhost:3001/contacts", data);
      alert("Message sent successfully");
      e.target.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact">
      <h1 id="title_contact">Contact <span>Us</span></h1>
      <p id="desc_contact">
        Get in touch with us to discuss your project, ask questions, or explore how we can work together
      </p>

      <div className="contact">
        <div className="img_contact">
          <img id="img1" src={`${process.env.PUBLIC_URL}/bg_image_contact2.png`} />
          <img id="img2" src={`${process.env.PUBLIC_URL}/img_contact.png`} />
        </div>

        <form id="form_conatct" onSubmit={handleSubmit}>
          <label style={{ color: errors.nom ? "red" : "" }}>Full Name</label>
          <input
            id="nom"
            type="text"
            placeholder="Your Name"
            style={{ borderColor: errors.nom ? "red" : "" }}
          />

          <div className="second_ligne">
            <div className="email">
              <label
                id="email_lb"
                style={{ color: errors.email ? "red" : "" }}
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Your Email"
                style={{ borderColor: errors.email ? "red" : "" }}
              />
            </div>

            <div className="num">
              <label
                id="phone_lb"
                style={{ color: errors.num ? "red" : "" }}
              >
                Phone Number
              </label>
              <input
                id="num"
                type="text"
                placeholder=" Your Phone Number"
                style={{ borderColor: errors.num ? "red" : "" }}
              />
            </div>
          </div>

          <label
            id="msgg"
            style={{ color: errors.texte ? "red" : "" }}
          >
            Message
          </label>
          <textarea
            id="texte"
            rows={4}
            placeholder="Enter Your Message here"
            style={{ borderColor: errors.texte ? "red" : "" }}
          />

          <div className="fichier">
            <i className="ri-upload-cloud-line"></i>
            <label>
              Add an attachment here
              <input type="file" hidden />
            </label>
          </div>

          <button id="enr">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
