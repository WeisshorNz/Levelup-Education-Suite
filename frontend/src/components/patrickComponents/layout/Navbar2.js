import React from 'react';
import styles from '../../../styling/Navbar2.module.css';
// import images from '../../../images/StudentDashboard/NavBar/LevelUpWorks-white.png';
import { useState } from 'react';
import MaoriFlagSD from '../../../images/src-assets/StudentDashboard/MaoriFlagSD.png';
import NZFlagSD from '../../../images/src-assets/StudentDashboard/NZFlagSD.png';

const Navbar2 = () => {
  const alert1 = () => {
    return alert('Start Project');
  };

  const [activeDot, setActiveDot] = useState(1);
  const handlelinkClick = (dotNumber) => {
    setActiveDot(dotNumber);
  };

  return (
    <div className={styles['nav']}>
      <div className={styles['nav-header']}>
        <div className={styles['nav-title']}>
          {/* <img
            src={images}
            alt="Instructions"
            width={120}
            height={40}
            className={styles['nav-title']}
          ></img> */}
          Project Introduction
          <span className={activeDot === 1 ? styles['dot-1'] : styles['dot']}>
            1
          </span>
          <span className={activeDot === 2 ? styles['dot-1'] : styles['dot']}>
            2
          </span>
          <span className={activeDot === 3 ? styles['dot-1'] : styles['dot']}>
            3
          </span>
          <span className={activeDot === 4 ? styles['dot-1'] : styles['dot']}>
            4
          </span>
        </div>
      </div>

      <div className={styles['nav-links']}>
        <a
          onClick={alert1}
          href="#Start-ProjectSD"
          className={styles['Start-ProjectSD']}
        >
          Start Project
        </a>
        <a
          href="#Ask-Teacher"
          onClick={() => handlelinkClick(2)}
          className={styles['Ask-TeacherSD']}
        >
          Ask Teacher for help
        </a>
        <a
          href="#MoreProjects"
          onClick={() => handlelinkClick(3)}
          className={styles['MoreProjectsSD']}
        >
          More Projects
        </a>

        <a href="Maorilang" className={styles['Maorilang']}>
          <img src={MaoriFlagSD} alt="MaoriFlagSD"></img>
        </a>
        <a href="NZlang" className={styles['NZlang']}>
          <img src={NZFlagSD} alt="NZFLAGSD"></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
