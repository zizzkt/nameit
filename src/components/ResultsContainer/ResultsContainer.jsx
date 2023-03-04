import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";
import '../NameCard/NameCard.css'

const ResultsContainer = ({ suggestedNames }) => {
  const suggestedNameJsx = suggestedNames.map((suggestedName) => {
    return <NameCard key={suggestedName} suggestedName={suggestedName}/>
  });

  return <div className="results-container">{suggestedNameJsx}</div>;
};

export default ResultsContainer;
