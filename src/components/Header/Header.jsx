import { useEffect, useRef } from "react";

const Header = () => {
  const headerDiv = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 99) {
        headerDiv.current.className = "headerScrolled";
      } else headerDiv.current.className = "header";
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
        <p>Portfolio</p>
        <p>About me</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
