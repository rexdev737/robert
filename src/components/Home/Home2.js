import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <p style={{ lineHeight: 3, fontSize: '1.5em', textAlign: 'left', textIndent: 10}}>
              I'm a senior Frontend Developer with 8+ years of handsome experience of developing, and implementing applications and solutions using a range of technologies and programming languages.<br/>
              I've mostly worked with JavaScript, TypeScript and its frameworks, like React.js, Vue.js, Next.js, for front end side, and Node.js, Express.js, Ruby on Rails for backend development.<br/>
              Also, I am so very familiar with HTML, CSS, jQuery and Bootstrap, and also have good experience with Solidity, Rust, Web3.js for blockchain developement.<br/>
              I am passionate about learning new technologies and best practices, so this really keeps me up-to-date and growing all the time.<br/>
              Seeking a long-term remote position and our profit will be guarded by solid techniques and my responsibility.<br/>
              Adept in trouble-shooting and working to offer solutions, strong team player with excellent collaboration skills, and working with other professionals to ensure that projects are successfully completed.<br/>
              As a full-time employee and often contractor, I successfully accomplished all their missions and goals so that they could achieve great success in their industry.<br/>
              I will do my best and hope to work with you.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
