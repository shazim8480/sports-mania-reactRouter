import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailsHeader from "../DetailsHeader/DetailsHeader";
import "./TeamDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import maleImage from "../../Images/male.png";
import femaleImage from "../../Images/female.png";
import {
  faCheckCircle,
  faFlag,
  faFutbol,
  faMale,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
  const { teamId } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]));
  }, [teamId]);

  return (
    <div className="details-container">
      <DetailsHeader details={details}></DetailsHeader>

      <div className="club-container mx-auto">
        <div className="club-info">
          <h2 className="team-infoTitle">{details.strTeam}</h2>
          <div className="info-text d-flex">
            <FontAwesomeIcon className="mr-3 my-1" icon={faCheckCircle} />
            <h5>Founded : {details.intFormedYear}</h5>
          </div>
          <div className="info-text d-flex">
            <FontAwesomeIcon className="mr-3 my-1" icon={faFlag} />
            <h5>Country : {details.strCountry}</h5>
          </div>
          <div className="info-text d-flex">
            <FontAwesomeIcon className="mr-3 my-1" icon={faFutbol} />
            <h5>Sport Type : {details.strSport}</h5>
          </div>
          <div className="info-text d-flex">
            <FontAwesomeIcon className="mr-4 my-1" icon={faMale} />
            <h5>Gender : {details.strGender}</h5>
          </div>
        </div>

        <div className="conditional-img d-flex">
          {/* conditional rendering for img */}
          <img src={details.strGender ? maleImage : femaleImage} alt="" />
        </div>
      </div>

      <div className="description-container">
        <p>{details.strDescriptionEN}</p>
      </div>

      <div className="social-container d-flex pb-4 justify-content-center">
        <a rel="noreferrer" href="http://example.com" target="_blank">
          <FontAwesomeIcon className="social-icon twitter" icon={faTwitter} />
        </a>
        <a rel="noreferrer" href="http://example.com" target="_blank">
          <FontAwesomeIcon
            className="social-icon facebook"
            icon={faFacebookF}
          />
        </a>
        <a rel="noreferrer" href="http://example.com" target="_blank">
          <FontAwesomeIcon className="social-icon youtube" icon={faYoutube} />
        </a>
      </div>
    </div>
  );
};

export default TeamDetails;
