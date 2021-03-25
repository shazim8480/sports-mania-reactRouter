import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Teams from "../Teams/Teams";
import "./Home.css";

const Home = () => {
  // showing each team data //
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain"
    )
      .then((response) => response.json())
      .then((data) => setTeams(data.teams));
  }, []);

  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="teams-container">
        {/* To load each team data in teams component */}
        {teams.map((team) => (
          <Teams team={team}></Teams>
        ))}
      </div>
    </>
  );
};

export default Home;
