import React from "react";

const EducationCard = ({institute,date,formation}) => {
  return (
    <div>
      <div className="container-education-card">
        <div className="container-title-date-edu">
          <p className="title-institute">{institute}</p>
          <p className="title-date">{date}</p>
        </div>
        <div className="container-title-degree">
          <p className="title-degree">{formation}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
