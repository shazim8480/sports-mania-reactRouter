import React from "react";
import "./DetailsHeader.css";

const DetailsHeader = (props) => {
  const { strTeamBadge } = props.details;
  return (
    <div className="details-header-container">
      <div className="details-header-overlay">
        <img className="team-badge" src={strTeamBadge} alt="team-logo" />
      </div>
    </div>
  );
};

export default DetailsHeader;
