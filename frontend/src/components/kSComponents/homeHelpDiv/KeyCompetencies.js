import HomeIcon from "./LevelUpWork-icon.png";

export default function KeyCompetencies() {
  return (
    <div className="home-help-section">
      <div className="home-help-flex-1">
        <h3 className="home-help-h3">Enhance key competencies</h3>
        <div className="home-help-subheading">
          The programme enhances capabilities of students in the 5 Key
          Competencies identified in the New Zealand Curriculum:
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
          THINKING <br />
          <p className="home-help-p">
            In particular the programme focused on problem solving, design
            thinking and computational thinking.
          </p>
          <br />
          <br />
          DISCERNING CODES <br />
          <p className="home-help-p">
            Analysing language, symbols, and texts in order to understand and
            make sense of the codes in which knowledge is expressed.
          </p>
          <br />
          <br />
          SELF-MANAGEMENT <br />
          <p className="home-help-p">
            Projects and challenges are designed to motivate students to explore
            and experiment with self-motivation.{" "}
          </p>
          <br />
          <br />
          RELATIONSHIPS WITH PEERS <br />
          <p className="home-help-p">
            The programme is designed with unplugged sessions where students
            interact in a range of different situations, including things like
            being able to listen well, recognise different points of view, and
            share ideas.{" "}
          </p>
          <br />
          <br />
          PARTICIPATION AND COLLABORATION <br />
          <p className="home-help-p">
            The programme encourages students to be involved in communities,
            such as family, whānau, school, and contribute and make connections
            with other people.
          </p>
        </div>
      </div>
    </div>
  );
}
