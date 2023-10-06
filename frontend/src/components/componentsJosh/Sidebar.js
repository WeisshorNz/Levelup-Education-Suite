import './Sidebar.css';
import teacher from '../Images/public-images/teachers/JasminaSalvador.png';
import progressTracker from '../Images/src-assets/TeacherDashboard/progressTracker.png';
import studentProfiles from '../Images/src-assets/TeacherDashboard/studentProfiles.png';
import helpRequests from '../Images/src-assets/TeacherDashboard/helpRequests.png';
import projectSubmissions from '../Images/src-assets/TeacherDashboard/projectSubmissions.png';
import projectLibrary from '../Images/src-assets/TeacherDashboard/projectLibrary.png';
import profile from '../Images/src-assets/profile.png';
import settings from '../Images/src-assets/settings.png';
import logout from '../Images/src-assets/logout.png';

function Sidebar() {
  return (
    <div>
      <div className="sideSection">
        <img src={teacher}></img>

        <div className="sideIcon">
          {/* image links */}
          <img src={progressTracker} />
          <button className="sidebarBtn">Progress Tracker</button>
        </div>

        {/* wrap the rest of the buttons in the same div ln 12 */}

        <div className="sideIcon">
          <img src={studentProfiles} />
          <button className="sidebarBtn">Student Profiles</button>
        </div>

        <div className="sideIcon">
          <img src={helpRequests} />
          <button className="sidebarBtn">Help Requests</button>
        </div>

        <div className="sideIcon">
          <img src={projectSubmissions} />
          <button className="sidebarBtn">Project Submission</button>
        </div>

        <div className="sideIcon">
          <img src={projectLibrary} />
          <button className="sidebarBtn">Project Library</button>
        </div>

        <div className="sideIcon">
          <img src={profile} />
          <button className="sidebarBtn">Profile</button>
        </div>

        <div className="sideIcon">
          <img src={settings} />
          <button className="sidebarBtn">Settings</button>
        </div>

        <div className="sideIcon">
          <img src={logout} />
          <button className="sidebarBtn">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
