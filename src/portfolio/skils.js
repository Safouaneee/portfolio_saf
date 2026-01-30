import { useEffect } from "react";

function Skills() {

  useEffect(() => {
    let vantaEffect;

    if (window.VANTA) {
      vantaEffect = window.VANTA.NET({
        el: "#skills .vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 0xfb6607,
        backgroundColor: 0x23153c
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <section id="skills">
      {/* Vanta background */}
      <div className="vanta-bg"></div>

      {/* Content */}
      <div className="skl">
        <div id="wel" className="welcome">
          <p>MY SKILLS</p>
        </div>

        <h1>Full Stack Development & Technical Skills</h1>

        <p id="desc_sk">
          Experienced in building maintainable and scalable web applications using modern tools and best development practices.
        </p>

        <img
          src={`${process.env.PUBLIC_URL}/skils.png`}
          alt="skills"
        />
      </div>
    </section>
  );
}

export default Skills;
