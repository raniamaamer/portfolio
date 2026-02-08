import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import NestJS from "../../Assets/TechIcons/NestJS.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import CSS from "../../Assets/TechIcons/CSS.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Selenium from "../../Assets/TechIcons/Selenium.svg";
import Jenkins from "../../Assets/TechIcons/Jenkins.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Terraform from "../../Assets/TechIcons/Terraform.svg";
import Keras from "../../Assets/TechIcons/Keras.svg";
import TensorFlow from "../../Assets/TechIcons/TensorFlow.svg";
import OpenCV from "../../Assets/TechIcons/OpenCV.svg";
import Pytorch from "../../Assets/TechIcons/Pytorch.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typecript</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="node" />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={NestJS} alt="nestjs" />
        <div className="tech-icons-text">NestJS</div>
      </Col>

      
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="mongoDb" />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">Postgresql</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={OpenCV} alt="OpenCV" />
        <div className="tech-icons-text">OpenCV</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Keras} alt="Keras" />
        <div className="tech-icons-text">Keras</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={TensorFlow} alt="TensorFlow" />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Pytorch} alt="Pytorch" />
        <div className="tech-icons-text">Pytorch</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      

      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt="kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Selenium} alt="Selenium" />
        <div className="tech-icons-text">Selenium</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Jenkins} alt="Jenkins" />
        <div className="tech-icons-text">Jenkins</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Terraform} alt="Terraform" />
        <div className="tech-icons-text">Terraform</div>
      </Col>
      

    </Row>
  );
}

export default Techstack;
