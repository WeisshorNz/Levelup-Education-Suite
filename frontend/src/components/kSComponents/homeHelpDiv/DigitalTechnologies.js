import HomeIcon from "./LevelUpWork-icon.png";

export default function DigitalTechnologies() {
  return (
    <div className="home-help-section">
      <div className="home-help-flex-1">
        <h3 className="home-help-h3">Expands Digital Knowledge Base</h3>
        <div className="home-help-subheading">
          This programme gives you the 5 major capabilities to be confident in
          Digital Technologies.
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
          PROBLEM SOLVING <br />
          <p className="home-help-p">
            The programme challenges are designed to think around multiple
            issues and challenges the way students interact with computers and
            other related technology.
          </p>
          <br />
          <br />
          DECISION-MAKING <br />
          <p className="home-help-p">
            The programme uses technology to make the lives of many people
            happier through the decisions made when creating digital
            applications.
          </p>
          <br />
          <br />
          CONFIDENCE <br />
          <p className="home-help-p">
            When having the skills to manipulate the applications and learning
            to use it brings self-confidence into your life.
          </p>
          <br />
          <br />
          HIGHER SELF-EXPECTATIONS <br />
          <p className="home-help-p">
            This programme develops students to think the best of themselves to
            bring higher expectations to their learning and lives as young
            adults.
          </p>
          <br />
          <br />
          COHERENCE <br />
          <p className="home-help-p">
            This programme offers all students a broader education that makes
            links within and across learning areas.
          </p>
        </div>
      </div>
    </div>
  );
}
