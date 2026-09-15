import { useState } from "react";
import faqIcon from "./assets/images/icon-star.svg";
import plusIcon from "./assets/images/icon-plus.svg";
import minusIcon from "./assets/images/icon-minus.svg";

import "./App.css";

const accordionData = [
  {
    id: "faq01",
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: "faq02",
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: "faq03",
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: "faq04",
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

const App = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordion = (faqId) => {
    setOpenAccordionId((currentId) => (currentId === faqId ? null : faqId));
  };

  return (
    <main className="faq-accordion">
      <header className="faq-accordion-header">
        <img src={faqIcon} alt="" className="faq-icon" />
        <h1 className="faq-heading">FAQs</h1>
      </header>
      <section className="faq-accordion-section">
        {accordionData.map((accordion) => {
          const isOpen = accordion.id === openAccordionId;

          return (
            <div className="accordion" key={accordion.id}>
              <button
                className="accordion-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={accordion.id}
                onClick={() => handleAccordion(accordion.id)}
              >
                <span className="accordion-question-text">
                  {accordion.question}
                </span>
                <img
                  className="accordion-state-icon"
                  src={isOpen ? minusIcon : plusIcon}
                  alt=""
                />
              </button>
              <p
                className={`accordion-answer ${isOpen ? "active" : ""}`}
                id={accordion.id}
              >
                {accordion.answer}
              </p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default App;
