import React from "react";
import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Teams.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Teams = (props) => {
  const { idTeam, strTeamBadge, strTeam, strSport } = props.team;
  // to show dynamic team detail data for onclick button//
  const history = useHistory();
  const showTeamDetails = (idTeam) => {
    const url = `teamDetails/${idTeam}`;
    history.push(url);
  };
  ///////////////////////////////////////////////////////
  return (
    <>
      <Container>
        <Card className="team-inner">
          <Card.Img
            variant="top"
            className="team-img"
            src={strTeamBadge}
            alt=""
          />
          <Card.Body className="card-body-custom">
            <Card.Title className="card-title-custom">{strTeam}</Card.Title>
            <Card.Text> Sports Type : {strSport}</Card.Text>
            <Button
              onClick={() => showTeamDetails(idTeam)}
              className="main-btn"
            >
              Explore
              <FontAwesomeIcon
                className="explore-icon"
                icon={faLongArrowAltRight}
              />
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Teams;
