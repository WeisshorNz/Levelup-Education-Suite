import React from 'react';
import styles from '../../../styling/UploaderButton.module.css';
import images from '../../../images/StudentDashboard/uploader.png';
console.log(styles);
console.log(images);

function UploaderButton() {
  const alert5 = () => {
    return alert('Successfully Submitted');
  };
  return (
    <div>
      <form action="">
        <input type="file" accept="image/*" name="" id="" />
        <button onClick={alert5}>Submit</button>
      </form>
    </div>
  );
}

export default UploaderButton;
