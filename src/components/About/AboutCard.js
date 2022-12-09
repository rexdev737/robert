import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left", fontSize: '1.1em', lineHeight: 2.3 }}>
            Hi, Hope you are going well.<br/>
            I'm Full Stack | Web3 Developer from Singapore.<br/><br/>
            Demonstrated history of excellence throughout multiple positions with several companies with a focus on Full Stack Development and Engineering.<br/>
            <ul>
              <li>Full stack developer with 8+ years of experience developing, building, and implementing web applications and solutions.</li>
              <li>Innovative problem-solver, developer with excellent time and task management skills.</li>
              <li>Well-versed in Scrum team participation, remote work communication and project management tools.</li>
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
