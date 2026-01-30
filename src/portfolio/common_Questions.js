import { useState } from "react";

function Questions() {
  const faqs = [
    {
      question: "What technologies do you use?",
      answer: "React, Node.js, Express, MongoDB."
    },
    {
      question: "Do you build full-stack apps?",
      answer: "Yes, from front-end to back-end."
    },
    {
      question: "Do you offer freelance services?",
      answer: "Yes, I work on freelance and custom projects."
    },
    {
      question: "Can you handle UI/UX design?",
      answer: "Yes, I design clean and modern user interfaces."
    },
    {
      question: "Do you deploy and maintain projects?",
      answer: "Yes, deployment and maintenance are included."
    }
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section id="questions">
      <div className="title_comman">
        <h1><span>Common</span> Questions</h1>
        <p id="reponse">
          Helping you understand our process and offerings.
        </p>
      </div>
          <img id="think" src={`${process.env.PUBLIC_URL}/think.png`}></img>
          <img id="wom_think" src={`${process.env.PUBLIC_URL}/wom_think.png`}></img>
      <div className="faq">
        {faqs.map((faq, index) => (
          <div
            className={`faq-card ${openIndexes.includes(index) ? "active" : ""}`}
            key={index}
          >
            <div className="faq-header">
              <h2>{faq.question}</h2>
              <button
                className={`faq-btn ${openIndexes.includes(index) ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                {openIndexes.includes(index) ? "−" : "+"}
              </button>
            </div>

            {/* answer داخل card دائما */}
            <p className={`faq-answer ${openIndexes.includes(index) ? "open" : ""}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Questions;
