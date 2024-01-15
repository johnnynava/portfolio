import { useEffect, useRef, FC } from "react";

const Header: FC = () => {
  const headerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 99) {
        headerDiv.current!.className = "headerScrolled";
      } else headerDiv.current!.className = "header";
    });
  }, []);

  return (
    <div ref={headerDiv} className="header">
      <div className="headerLeft">
        <p
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Johnny Nava
        </p>
      </div>
      <div className="headerRight">
        <a href="#projects">
          <p>Portfolio</p>
        </a>
        <a href="#aboutMe">
          <p>About me</p>
        </a>
        <a href="#contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
