import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs } from "react-icons/si";

import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import NestJS from "../../Assets/TechIcons/NestJS.svg";
import Flask from "../../Assets/TechIcons/Flask.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import HTML from "../../Assets/TechIcons/HTML.svg";
import CSS from "../../Assets/TechIcons/CSS.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import GitHub from "../../Assets/TechIcons/GitHub.svg";
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
  const techs = [
    { icon: Javascript, label: "Javascript" },
    { icon: Typescript, label: "Typescript" },
    { icon: HTML, label: "HTML" },
    { icon: CSS, label: "CSS" },
    { icon: Tailwind, label: "Tailwind CSS" },
    { icon: Node, label: "Node.js" },
    { icon: ReactIcon, label: "React.js" },
    { icon: NestJS, label: "NestJS" },
    { icon: "next", label: "Next.js" },
    { icon: Flask, label: "Flask" },
    { icon: Python, label: "Python" },
    { icon: Java, label: "Java" },
    { icon: Firebase, label: "Firebase" },
    { icon: Postman, label: "Postman" },
    { icon: Mongo, label: "Mongo DB" },
    { icon: SQL, label: "PostgreSQL" },
    { icon: OpenCV, label: "OpenCV" },
    { icon: Keras, label: "Keras" },
    { icon: TensorFlow, label: "TensorFlow" },
    { icon: Pytorch, label: "PyTorch" },
    { icon: Git, label: "Git" },
    { icon: GitHub, label: "GitHub" },
    { icon: Docker, label: "Docker" },
    { icon: Kubernates, label: "Kubernetes" },
    { icon: Selenium, label: "Selenium", tight: true },
    { icon: Jenkins, label: "Jenkins", tight: true },
    { icon: Terraform, label: "Terraform", tight: true },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map(({ icon, label, tight }, index) => (
        <Col xs={4} md={2} key={index} className="tech-icons">
          
          {icon === "next" && (
            <SiNextdotjs className="tech-icon-images" />
          )}

          {icon !== "next" && (
            <img
              src={icon}
              alt={`${label} logo`}
              className={`tech-icon-images ${tight ? "icon-tight" : ""}`}
            />
          )}

          <div className="tech-icons-text">{label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
