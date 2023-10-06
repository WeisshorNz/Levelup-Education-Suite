import HomeIcon from "./LevelUpWork-icon.png";

export default function LearningPathways() {
  return (
    <div className="home-help-section">
      <div className="home-help-flex-1">
        <h3 className="home-help-h3">Interlinking Pathways</h3>
        <div className="home-help-subheading">
          This programme gives us 5 important interlinking Learning Pathways.
        </div>
      </div>
      <div className="home-help-flex-2">
        <div className="home-icons">
          {/* // Star logo icons */}
          <img id="home-icon-1" src={HomeIcon} alt="logo-icon" />
          <img id="home-icon-2" src={HomeIcon} alt="logo-icon" />
          <img id="home-icon-3" src={HomeIcon} alt="logo-icon" />
          <img id="home-icon-4" src={HomeIcon} alt="logo-icon" />
          <img id="home-icon-5" src={HomeIcon} alt="logo-icon" />
        </div>
        <div className="home-help-headings">
          <br />
          <br />
          COMPUTATIONAL THINKING <br />
          <p className="home-help-p">
            Within the programme the students are enabled to express problems
            and form solutions that will be designed so a computer can be used
            to create diverse and encapsulating applications.
          </p>
          <br />
          <br />
          DEVELOPING DIGITAL OUTCOMES <br />
          <p className="home-help-p">
            This programme is designed to strengthen the outcomes of each
            students personally to form strong applications.
          </p>
          <br />
          <br />
          DESIGNING PROCESSED OUTCOMES <br />
          <p className="home-help-p">
            Students will be taught the ways of how outcomes are processed,
            thought about, and produced.
          </p>
          <br />
          <br />
          DEVELOP VISUAL AND SOCIAL COMMUNICATIONS <br />
          <p className="home-help-p">
            Students will learn to design visually pleasing applications used to
            both keep the user aware of what is happening on the screen.
          </p>
          <br />
          <br />
          STRONG TECHNOLOGICAL PRACTICES <br />
          <p className="home-help-p">
            The programme will show students the best practices to think and
            solve the problems brought on by using technology.
          </p>
        </div>
      </div>
    </div>
  );
}
