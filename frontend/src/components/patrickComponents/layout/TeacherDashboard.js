import React from 'react';
import MainDashboard from '../../../pages/MainDashboard';
import styles from '../../../styling/TeacherDashboard.module.css';
import images from '../../../images/studentDashboard/VideoTutorial.png';
import { useEffect, useState } from 'react';
import TranslatedLanguage2 from '../../../components/patrickComponents/layout/TeacherDashboardData.json';
import AidenAndrewsTDS from '../../../images/studentDashboard/students (1)/students/AidenAndrews.png';
import RawiriFletcherTDS from '../../../images/studentDashboard/students (1)/students/RawiriFletcher.png';
import NeevahMachenryTDS from '../../../images/studentDashboard/students (1)/students/NeveahMachenry.png';

const TeacherDashboard = () => {
  const [checked, setChecked] = useState(false);
  // declaring variable for translation
  const [language, setLanguage] = useState('english');
  const [content, setContent] = useState({});

  //fetching data from database
  const [showData, setShowData] = useState([]);
  //const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (language === 'english') {
      setContent(TranslatedLanguage2.english);
    } else if (language === 'Maori') {
      setContent(TranslatedLanguage2.Maori);
    }
  }, [language]);

  //Warning it will be unable to fetch
  useEffect(() => {
    fetch(`http://localhost:4000/studentdashboard/submitproject`)
      .then((response) => response.json())
      .then((data) => {
        setShowData(data);
        console.log(data[0].submission);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleMarkAsComplete = () => {
    if (checked) {
      setChecked(false);
    } else {
      alert('Please tick the checkbox before marking as complete.');
    }
  };

  return (
    <MainDashboard>
      <div id={styles['Container2']}>
        <div id={styles['TeacherDashboardContainer3']}>
          <h2 id={styles['ProjectSubmission']}>Project Submissions TDSH</h2>
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option>English</option>
            <option>Maori</option>
          </select>
          <button id={styles['downloadbutton']} onClick={handleMarkAsComplete}>
            Mark as complete project
          </button>
          <a
            href={images}
            download="Aiden Project"
            target="_blank"
            rel="noreferrer"
          >
            <button id={styles['downloadbutton']}>Download Files</button>
          </a>
          {checked ? null : (
            <div id={styles['Aiden1']}>
              <input
                type="checkbox"
                id="nav-check"
                checked={checked}
                onChange={handleCheckboxChange}
              />

              <img
                src={AidenAndrewsTDS}
                alt="Instructions"
                width={90}
                height={90}
              ></img>

              {content.Description}
              {/* {<img src={imageUrl} />} */}
              {showData.map((data) => (
                <div>
                  <img
                    src={data.submission}
                    alt="data"
                    className={styles['UploadedPictureTDSH']}
                  />
                </div>
              ))}

              <div id={styles['time3']}>
                <div>{content.Description2}</div>
                <div>10:53 AM</div>
              </div>
            </div>
          )}
          <div id={styles['Rawiri1']}>
            <input type="checkbox" id="nav-check"></input>
            <img
              src={RawiriFletcherTDS}
              alt="Instructions"
              width={90}
              height={90}
            ></img>
            {content.Description3}
            <div id={styles['time3']}>
              <div>{content.Description4}</div>
              <div>10:52 Am</div>
            </div>
          </div>
          <div id={styles['Neevah1']}>
            <input type="checkbox" id="nav-check"></input>
            <img
              src={NeevahMachenryTDS}
              alt="Instructions"
              width={90}
              height={90}
            ></img>
            {content.Description5}
            <div id={styles['time3']}>
              <div>{content.Description6}</div>
              <div>10:50 Am</div>
            </div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};

export default TeacherDashboard;
