import HomeIcon from "./LevelUpWork-icon.png";

export default function IR4() {
  return (
    <div className="home-help-section">
      <div className="home-help-flex-1">
        <h3 className="home-help-h3">IR4.0</h3>
        <div className="home-help-subheading">
          Designed with IT industry experts, the programme develops the students
          to find applicable jobs and careers in the Fourth Industrial
          Revolution. (IR4.0)
        </div>
      </div>
      <div className="home-help-flex-2">
        {/* // Star logo icons */}
        <div className="home-icons">
          <img id="home-icon-1" src={HomeIcon} alt="logo-icon" />
          <img id="home-icon-2" src={HomeIcon} alt="logo-icon" />
          <img id="home-icon-3" src={HomeIcon} alt="logo-icon" />
          <img id="home-icon-4" src={HomeIcon} alt="logo-icon" />
          <img id="home-icon-5" src={HomeIcon} alt="logo-icon" />
        </div>
        <div className="home-help-headings">
          <br />
          <br />
          LEARNING TO LEARN <br />
          <p className="home-help-p">
            The programme will set challenges at the end of every project to
            encourage students to explore and learn how to learn.
          </p>
          <br />
          <br />
          COMMUNITY ENGAGEMENT <br />
          <p className="home-help-p">
            The programme encourages students to be involved in the communities,
            such as family, friends, and in school, to contribute and make
            connections with other people.
          </p>
          <br />
          <br />
          CULTURAL DIVERSITY <br />
          <p className="home-help-p">
            This programme is designed in New Zealand and reflects NZ's cultural
            diversity.
          </p>
          <br />
          <br />
          INCLUSION <br />
          <p className="home-help-p">
            In particular the programme is designed with acknowledgement to the
            student's identities and talents, allowing them to be creative to
            their personal ability.
          </p>
          <br />
          <br />
          FUTURE FOCUS <br />
          <p className="home-help-p">
            The programme leads students to explore future themes such as
            artificial intelligence and augmented reality.
          </p>
        </div>
      </div>
    </div>
  );
}
