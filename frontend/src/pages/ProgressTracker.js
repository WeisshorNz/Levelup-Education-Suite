import React from "react";
import Sidebar from "../componentsJosh/Sidebar";
import Navbar from "../componentsJosh/Navbar";
import ProgressContent from "../componentsJosh/progressContent";

export default function ProgressTracker() {
  return (
    <div>
      <Navbar />
      {/* this  " <div style={{ display: "flex" }}> " is a way of adding css in the javascript file */}
      <div style={{ display: "flex" }}>
        <Sidebar />
        <ProgressContent />
      </div>
    </div>
  );
}
