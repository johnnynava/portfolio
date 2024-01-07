const aboutMe = {
  summary:
    "Passionate and detail-oriented Front-End Developer with 5 years of experience in the tech industry as a Network Engineer. Aiming to transition to a full-time Front-End Developer job that will allow me to use my programming and debugging skills to tackle challenges that will provide value to customers and my employer.",
  currentSkills: [
    "React.js",
    "Javascript",
    "HTML",
    "CSS",
    "React Testing Library",
    "Jest",
    "Vitest",
    "Webpack",
    "Vite",
    "Git",
    "npm",
    "ESLint",
    "Prettier",
    "Linux",
  ],
  desiredSkills: [
    "Typescript",
    "Node.js",
    "GraphQL",
    "Redux",
    "React Native",
    "MongoDB",
  ],
};

const About = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeTop">
        <div className="aboutMeTopLeft">
          <h2>About Me</h2>
          <p className="summaryText">{aboutMe.summary}</p>
          <h4>Skills & Tools</h4>
        </div>
        <div className="aboutMeTopRight">
          <img src="assets/portfolio-lego.png"></img>
        </div>
      </div>
      <div className="aboutMeBottom">
        <div className="skills">
          {aboutMe.currentSkills.map((skill, index) => {
            return (
              <div className="skill" key={"currentSkill" + index}>
                <img
                  src={
                    skill === "React Testing Library"
                      ? "assets/techIcons/ReactTestingLibrary.svg"
                      : `assets/techIcons/${skill}.svg`
                  }
                ></img>
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
        <h4>Some of the Things I'm Interested in Learning</h4>
        <div className="desiredSkills">
          {aboutMe.desiredSkills.map((skill, index) => {
            return (
              <div className="desiredSkill" key={"desiredSkill" + index}>
                <img
                  src={
                    skill === "React Native"
                      ? "assets/techIcons/React.js.svg"
                      : `assets/techIcons/${skill}.svg`
                  }
                ></img>
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
