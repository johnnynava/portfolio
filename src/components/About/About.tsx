import { useEffect, useRef, FC } from "react";

type AboutMe = {
  readonly summary: string;
  readonly currentSkills: string[],
  readonly desiredSkills: string[],
}

const aboutMe: AboutMe = {
  summary:
    "Passionate and detail-oriented Front-End Developer with 5 years of experience in the tech industry as a Network Engineer. Aiming to transition to a full-time Front-End Developer job that will allow me to use my programming and debugging skills to tackle challenges that will provide value to customers and my employer.",
  currentSkills: [
    "React.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "React Router",
    "Jest",
    "Vitest",
    "React Testing Library",
    "Webpack",
    "Vite",
    "Git",
    "npm",
    "ESLint",
    "Sass",
    "Prettier",
    "Linux",
  ],
  desiredSkills: [
    "Node.js",
    "MongoDB",
    "GraphQL",
    "Redux",
    "Three.js",
    "SQL",
    "PHP",
    "React Native",
  ],
};

const About: FC = () => {
  const h2About = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    window.addEventListener("scroll", () => {
      const h2ProjectsInfo = h2About.current!.getBoundingClientRect();
      if (
        h2ProjectsInfo.bottom > 0 &&
        h2ProjectsInfo.bottom <= viewportHeight &&
        h2ProjectsInfo.top >= 0
      ) {
        h2About.current!.className = "visible";
      } else h2About.current!.className = "";
    });
  }, []);

  return (
    <div className="aboutMe">
      <a id="aboutMe"></a>
      <div className="aboutMeTop">
        <div className="aboutMeTopLeft">
          <h2 ref={h2About}>About Me</h2>
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
                      : skill === "React Router"
                        ? `assets/techIcons/ReactRouter.svg`
                        : `assets/techIcons/${skill}.svg`
                  }
                ></img>
                <p>{skill}</p>
              </div>
            );
          })}
        </div>
        <h4>Some of the Things I&apos;m Interested in Learning</h4>
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
