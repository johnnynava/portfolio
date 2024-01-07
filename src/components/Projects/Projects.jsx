import { useEffect, useRef } from "react";

const projectsArray = [
  {
    title: "Fashion Store",
    subtitle: "Front-End Web Store",
    date: "2023",
    summary:
      "Front-End Fashion Store I made from scratch using React. You can browse the catalog as well as add or remove items to your shopping bag and then checkout.",
    technologies: "React.js, React Router, CSS",
    link: "https://shopping-cart-sepia-eight.vercel.app/",
    githubLink: "https://github.com/johnnynava/shopping-cart",
    isResponsive: true,
    desktopScreenshot: "assets/fashionStore/desktop.jpeg",
    phoneScreenshot: "assets/fashionStore/mobile.jpeg",
    isCompleted: true,
  },
  {
    title: "Memory Game: Film Posters Edition",
    subtitle: "React Memory Card Game",
    date: "2023",
    summary:
      "A Memory Card game but it's film posters. It uses TMDB's API to retrieve the film posters. You win by choosing 12 different posters in a row. If you choose a poster that you picked before then you lose.",
    technologies: "React.js, TMDB's API, React Testing Library, CSS",
    link: "https://johnnynava.github.io/memory-card/",
    githubLink: "https://github.com/johnnynava/memory-card",
    isResponsive: true,
    desktopScreenshot: "assets/memoryGame/desktop.jpeg",
    phoneScreenshot: "assets/memoryGame/mobile.jpeg",
    isCompleted: true,
  },
  {
    title: "Todo List App",
    subtitle: "Javascript Todo List App",
    date: "2023",
    summary:
      "Made from scratch using pure Javascript. The application allows you to add new projects, delete projects, edit projects, add tasks to each project, deadlines, descriptions, etc. This was made before I learned how to do responsive websites so it doesn't look good on mobile.",
    technologies: "Javascript, HTML, CSS, Web Storage API",
    link: "https://johnnynava.github.io/todo-list/",
    githubLink: "https://github.com/johnnynava/todo-list",
    isResponsive: false,
    desktopScreenshot: "assets/todoList/desktop.jpeg",
    phoneScreenshot: null,
    isCompleted: true,
  },
  {
    title: "Progressive Overload",
    subtitle: "Workout Tracker",
    date: "2024",
    summary:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
    technologies: "React.js, Node.js, CSS",
    link: null,
    githubLink: null,
    isResponsive: true,
    desktopScreenshot: "assets/workoutTracker/desktop.jpeg",
    phoneScreenshot: "assets/workoutTracker/mobile.jpeg",
    isCompleted: false,
  },
];

const Projects = () => {
  const h2Projects = useRef(null);

  useEffect(() => {
    let viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    window.addEventListener("scroll", () => {
      let h2ProjectsInfo = h2Projects.current.getBoundingClientRect();
      if (
        h2ProjectsInfo.bottom > 0 &&
        h2ProjectsInfo.bottom <= viewportHeight &&
        h2ProjectsInfo.top >= 0
      ) {
        h2Projects.current.className = "visible";
      } else h2Projects.current.className = "";
    });
  }, []);

  return (
    <div className="projectsSection">
      <a id="projects"></a>
      <h2 ref={h2Projects}>Projects</h2>
      <div className="projects">
        {projectsArray.map((project, index) => {
          const ProjectBottom = () => {
            return (
              <>
                <div className="projectBottomLeft">
                  {project.isResponsive === true ? (
                    <>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={project.desktopScreenshot}></img>
                        <img src={project.phoneScreenshot}></img>
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={project.desktopScreenshot}></img>
                    </a>
                  )}
                </div>
                <div className="projectBottomRight">
                  <div className="projectBottomRightTop">
                    <h4>Summary</h4>
                    <p>{project.summary}</p>
                  </div>
                  <div className="projectBottomRightMiddle">
                    <h5>Technologies</h5>
                    <h5>Date</h5>
                    <p className="projectTechnologies">
                      {project.technologies}
                    </p>
                    <p className="projectDate">{project.date}</p>
                  </div>
                  <div className="projectBottomRightBottom">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>LIVE PREVIEW</p>
                      <img src="assets/link.svg"></img>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p>GITHUB REPOSITORY</p>
                      <img src="assets/link.svg"></img>
                    </a>
                  </div>
                </div>
              </>
            );
          };
          return (
            <div key={"project" + index} className="project">
              {project.isCompleted === true ? (
                <>
                  <div className="projectTop">
                    <p className="projectTitle">{project.title}</p>
                    <p className="projectSubtitle">{project.subtitle}</p>
                  </div>
                  <div className="projectBottom">
                    <ProjectBottom />
                  </div>
                </>
              ) : (
                <>
                  <div className="projectTop">
                    <p className="projectTitle">{project.title}</p>
                    <p className="projectSubtitle">{project.subtitle}</p>
                    <p className="projectComingSoon">Coming Soon...</p>
                  </div>
                  <div className="projectBottomBlurred">
                    <ProjectBottom />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <a
        href="https://github.com/johnnynava?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>My Other Projects</p>
        <img src="assets/link.svg"></img>
      </a>
    </div>
  );
};

export default Projects;
