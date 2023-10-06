import "./HomeFooter.css";

function HomeFooter() {
  return (
    //creates a large container for all the elements in footer
    <div className="homefooter-container">
      {/* each element in footer belongs to footer-element class */}

      <div className="homefooter-element">
        <h3>COMPANY</h3>
        <a href="#aboutUs">About Us</a>
        <br />
        <a href="#careers">Careers</a>
        <br />
        <a href="#partners">Partners</a>
      </div>

      <div className="homefooter-element">
        <h3>COURSES</h3>
        <a href="#register">Register</a>
        <br />
        <a href="#login">Login</a>
        <br />
        <a href="#projects">Projects</a>
        <br />
        <a href="#teachers">Teachers</a>
        <br />
        <a href="#parents">Parents</a>
        <br />
        <a href="#resources">Resources</a>
      </div>

      <div className="homefooter-element">
        <h3>SUPPORT</h3>
        <a href="#FAQS">FAQS</a>
        <br />
        <a href="#helpdesk">Helpdesk</a>
        <br />
        <a href="#contactUs">Contact Us</a>
      </div>

      <div className="homefooter-element">
        <h3>LEGAL</h3>
        <a href="#terms&Conditions">Terms & Conditions</a>
        <br />
        <a href="#privacyPolicy">Privacy Policy</a>
      </div>

      {/* This footer element has a different class name as it's wider in size that the others */}
      <div className="homefooter-element-works">
        <h3>LEVEL UP WORKS</h3>
        <p>
          LevelUp Works is an Auckland-based enterprise dedicated to developing
          game-based learning software to help teachers in response to the New
          Zealand Digital Technologies & Hangarau Matihiko.
          <p>alan@levelupworks.com</p>
        </p>
        <p>(021) 668 185</p>
      </div>
    </div>
  );
}
export default HomeFooter;
