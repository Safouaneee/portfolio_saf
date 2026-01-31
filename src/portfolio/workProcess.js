import { useState } from "react";

function Work_process() {

  const [expanded, setExpanded] = useState(false);

  return (
    <section id="work_process">
      <div className="description_work">
        <div id="wk" className="welcome">
          <p>WORK PROCESS</p>
        </div>

        <h2>Work Process</h2>

        <p id="desc_work">
          A glimpse into my collaborative and iterative full-stack development process From designing intuitive interfaces to building robust and scalable backend systems.
          
          {expanded && (
            <>
              I begin by understanding the project goals, constraints, and user needs to ensure alignment with real-world requirements.
              <br />
              I translate ideas into clean, user-friendly interfaces while maintaining usability and accessibility standards.
              <br />
              On the backend, I focus on scalable architecture, secure data handling, and optimized performance.
              <br />
              Finally, I test, refine, and deploy solutions with attention to long-term maintainability and evolution.
            </>
          )}
        </p>

        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read less" : "Read more"}
        </button>

      </div>

      <div className="work_pr">
        <div className="ligne1">
          <div className="atape1">
            <i className="ri-lightbulb-line"></i>
            <h1>01</h1>
            <h3>Plan & Analyze</h3>
          </div>

          <div className="atape2">
            <i className="ri-pencil-ruler-2-line"></i>
            <h1>02</h1>
            <h3>Design & Prototype</h3>
          </div>
        </div>

        <div className="ligne2">
          <div className="etape3">
            <i className="ri-code-line"></i>
            <h1>03</h1>
            <h3>Develop & Implement</h3>
          </div>

          <div className="etape4">
            <i className="ri-rocket-line"></i>
            <h1>03</h1>
            <h3>Test & Deploy</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work_process;
