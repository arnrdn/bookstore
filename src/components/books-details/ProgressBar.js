import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(Math.floor(Math.random() * (100 - 0 + 1) + 0));

  const updatePercentage = () => {
    if (percentage + 10 > 100) {
      setPercentage(100);
    } else {
      setPercentage(percentage + 10);
    }
  };

  return (
    <div className="user-progress-container">
      <div className="user-progress">
        <div
          className="progressbar"
          style={{
            width: '4.25rem',
            height: '4.25rem',
          }}
        >
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              pathColor: '#379cf6',
              trailColor: '#e8e8e8',
            })}
          />
        </div>
        <div className="about-progressbar">
          <div className="curr-progress">{`${percentage}%`}</div>
          <div>Completed</div>
        </div>
      </div>
      <div className="line-progress" />
      <div className="book-info">
        <span className="curr">
          current chapter
        </span>
        <h5>Introduction</h5>
        <button type="button" className="update-btn" onClick={updatePercentage}>
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
