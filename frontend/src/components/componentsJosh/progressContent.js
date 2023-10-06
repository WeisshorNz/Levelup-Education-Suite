import React from "react";
import "./progressContent.css";

export default function progressContent() {
  return (
    // bakcground
    <div className="progressContent">
      {/* light blue div */}
      <div className="content">
        <div className="contentTitle"> BEGINNER COURSE</div><br/><br/><br/>

        <div className="progressBar">
          <div>AIDEN ANDREWS</div>
          <p> 4/15 Projects Completed</p>
        </div>
        <br/>

        <div className="progressBar">
          <div>COURTNET BRISTOL</div>
          <p> 1/15 Projects Completed</p>
        </div>
        <br/>

        <div className="progressBar">
          <div>NAGINI CORTES</div>
          <p> 4/15 Projects Completed</p>
        </div>
        <br/>

        <div className="progressBar">
          <div>RAWIRI</div>
          <p> 7/15 Projects Completed</p>
        </div>
        <br/>
        
      </div>
    </div>
  );
}
