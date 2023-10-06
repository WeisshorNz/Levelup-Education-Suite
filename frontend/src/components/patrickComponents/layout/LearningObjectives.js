import React from 'react';
import MainDashboard from '../../../pages/MainDashboard';
import images from '../../../images/studentDashboard/learning objectives.png';
import styles from '../../../styling/LearningObjectives.module.css';
console.log(images);

const LearningObjectives = () => {
  return (
    <MainDashboard>
      <div className={styles['LearningObjectivesContainer1']}>
        <div className={styles['LearningObjectivesContainer2']}>
          <img
            src={images}
            alt="learning Objectives"
            className={styles['LearningObjectives']}
          />
        </div>
      </div>
    </MainDashboard>
  );
};

export default LearningObjectives;
