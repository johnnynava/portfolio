const contactObj = {
  email: "JOHNNAVA@ZOHO.COM",
  linkedIn: "https://www.linkedin.com/in/johnnynavadev/",
  githubLink: "https://github.com/johnnynava",
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactTop">
        <a id="contact"></a>
        <h3>GET IN TOUCH</h3>
        <a href="mailto: johnnava@zoho.com">
          <p>{contactObj.email}</p>
        </a>
      </div>
      <div className="contactBottom">
        <div className="contactBottomLeft">
          <p>Johnny Nava</p>
          <p>Surrey, United Kingdom</p>
        </div>
        <div className="contactBottomMid">
          <p>Built using</p>
          <p>React.js and CSS</p>
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
