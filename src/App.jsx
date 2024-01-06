import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
};

export default App;
