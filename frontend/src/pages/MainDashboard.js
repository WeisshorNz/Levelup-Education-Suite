import React from 'react';
import StudentDashboardSidebar from '../components/patrickComponents/layout/StudentDashboard';

import Navbar2 from '../components/patrickComponents/layout/Navbar2';

const MainDashboard = ({ children }) => {
  return (
    <div>
      <Navbar2></Navbar2>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <StudentDashboardSidebar />
        <main>{children}</main>
        {/* <LearningObjectives /> */}
      </div>
      {/* <Section /> */}
    </div>
  );
};

export default MainDashboard;
