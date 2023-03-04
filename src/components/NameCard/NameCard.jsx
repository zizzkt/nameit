import React from "react";
import './NameCard.css';

const namecheapUrl = "https://www.namecheap.com/domains/registration/results/?domain=%27%3B"

const NameCard = ({ suggestedName }) => {
  return (
    <a className="card-link" target='_blank' rel="noreferrer" href={`${namecheapUrl}${suggestedName}`}>
        <div className="result-name-card">
      <p className="result-name">{suggestedName}</p>
    </div>
    </a>
  );
};

export default NameCard;
