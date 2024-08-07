import { FC } from "react";

type ContactObj = {
  readonly email: string;
  readonly linkedIn: string;
  readonly githubLink: string;
};

const contactObj: ContactObj = {
  email: "JOHNNAVA@ZOHO.COM",
  linkedIn: "https://www.linkedin.com/in/telejohn/",
  githubLink: "https://github.com/johnnynava",
};

const Contact: FC = () => {
  return (
    <div className="contact">
      <div className="contactTop">
        <a id="contact"></a>
        <h3>GET IN TOUCH</h3>
        <a href="mailto: johnnava@zoho.com">{contactObj.email}</a>
      </div>
      <div className="contactBottom">
        <div className="contactBottomLeft">
          <p>Johnny Nava</p>
          <p>United Kingdom</p>
        </div>
        <div className="contactBottomMid">
          <p>Built using</p>
          <p>React.js and Three.js</p>
        </div>
        <div className="contactBottomRight">
          <p>Other Links</p>
          <a
            href={contactObj.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={contactObj.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
