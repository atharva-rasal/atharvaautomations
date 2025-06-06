import React from "react";
import "./Teams.css";
import { teams } from "../../data";

const Teams = () => {
  return (
    <section id="team">
      <div className="container">
        <h1 className="title">
          Our <span className="g-text">Teams</span>
        </h1>
        <h3 className="sub_title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga id quasi
          recusandae unde reiciendis eum.
        </h3>
        <div className="teams_container">
          {teams.map((team, index) => (
            <div className="team_card">
              <div className="profile_container">
                <img src={team.profile} alt={team.name} />
              </div>
              <div className="details">
                <h3 className="name">{team.name}</h3>
                <p className="text_muted">{team.title}</p>
                <div className="social_container">
                  {team.social.map((item, i) => (
                    <a
                      href={item.url || "#"}
                      target="_blank"
                      className="icon_container"
                      key={i}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
