import StudentProjectLibrary from "./pages/StudentProjectLibrary";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentProfileViewer from "./pages/StudentProfileViewer";
import "./App.css";
import MainDashboard from "./pages/MainDashboard";
import LearningObjectives from "./components/patrickComponents/layout/LearningObjectives";
import VideoTutorial from "./components/patrickComponents/layout/VideoTutorial";
import Instructions from "./components/patrickComponents/layout/Instructions";
import MakeProject from "./components/patrickComponents/layout/MakeProject";
import SubmitProject from "./components/patrickComponents/layout/SubmitProject";
import TaketheQuiz from "./components/patrickComponents/layout/TaketheQuiz";
import TeacherDashboard from "./components/patrickComponents/layout/TeacherDashboard";
import "./styling/SPL.css";

export default function App() {
  return (
    <div className="App">
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/student-project-library"
            element={<StudentProjectLibrary />}
          />
          <Route
            path="/student-profile-viewer/:id"
            element={<StudentProfileViewer />}
          />
          <Route path="/studentdashboard" element={<MainDashboard />}></Route>
          <Route
            path="/studentdashboard/learningobjectives"
            element={<LearningObjectives />}
          ></Route>
          <Route
            path="/studentdashboard/videotutorial"
            element={<VideoTutorial />}
          ></Route>
          <Route
            path="/studentdashboard/instructions"
            element={<Instructions />}
          ></Route>
          <Route
            path="/studentdashboard/makeproject"
            element={<MakeProject />}
          ></Route>
          <Route
            path="/studentdashboard/submitproject"
            element={<SubmitProject />}
          ></Route>
          <Route
            path="/studentdashboard/takethequiz"
            element={<TaketheQuiz />}
          ></Route>
          <Route
            path="/studentdashboard/projectsubmissions"
            element={<TeacherDashboard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
