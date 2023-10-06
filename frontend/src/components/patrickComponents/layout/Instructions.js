import React from 'react';
import MainDashboard from '../../../pages/MainDashboard';
import images from '../../../images/studentDashboard/Instructionsfrontend.png';
import styles from '../../../styling/Instructions.module.css';
console.log(images);
const Instructions = () => {
  return (
    <MainDashboard>
      <div className={styles['InstructionsContainer1']}>
        <div className={styles['InstructionsContainer2']}>
          <img
            src={images}
            alt="Instructions"
            className={styles['Instructions']}
          />
        </div>
      </div>
    </MainDashboard>
  );
};

export default Instructions;
