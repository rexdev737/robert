import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
// import { DiLaravel } from "react-icons/di";
import {
  SiAmazonaws,
  SiAngularjs, 
  SiApollographql, 
  SiBootstrap,
  SiCodeigniter,
  SiExpress,
  SiEthereum,
  SiGithub, 
  SiHtml5, 
  SiJavascript, 
  SiLaravel, 
  SiMaterialui, 
  SiMongodb, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPhp, 
  SiReact, 
  SiReduxsaga, 
  SiRust, 
  SiSolidity, 
  SiTypescript, 
  SiVuedotjs, 
  SiWeb3Dotjs 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col> */}
      <Col xs={4} md={3} className="tech-icons">
        <SiJavascript />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiReact />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVuedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiAngularjs />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeigniter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReduxsaga />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPhp />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiMaterialui />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiApollographql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRust />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWeb3Dotjs />
      </Col>
    </Row>
  );
}

export default Techstack;
