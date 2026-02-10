import React from "react";
import { Row } from "react-bootstrap";
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
  const Badge = ({ icon, text, tight }) => (
    <div className="tech-badge">
      {icon}
      <span>{text}</span>
    </div>
  );

  return (
    <Row className="tech-row">
      <Badge icon={<img src={Javascript} className="tech-icon" />} text="Javascript" />
      <Badge icon={<img src={Typescript} className="tech-icon" />} text="Typescript" />
      <Badge icon={<img src={HTML} className="tech-icon" />} text="HTML" />
      <Badge icon={<img src={CSS} className="tech-icon" />} text="CSS" />
      <Badge icon={<img src={Tailwind} className="tech-icon" />} text="Tailwind CSS" />
      <Badge icon={<img src={Node} className="tech-icon" />} text="Node.js" />
      <Badge icon={<img src={ReactIcon} className="tech-icon" />} text="React.js" />
      <Badge icon={<img src={NestJS} className="tech-icon" />} text="NestJS" />
      <Badge icon={<SiNextdotjs className="tech-icon" />} text="Next.js" />
      <Badge icon={<img src={Flask} className="tech-icon" />} text="Flask" />
      <Badge icon={<img src={Python} className="tech-icon" />} text="Python" />
      <Badge icon={<img src={Java} className="tech-icon" />} text="Java" />
      <Badge icon={<img src={Firebase} className="tech-icon" />} text="Firebase" />
      <Badge icon={<img src={Postman} className="tech-icon" />} text="Postman" />
      <Badge icon={<img src={Mongo} className="tech-icon" />} text="Mongo DB" />
      <Badge icon={<img src={SQL} className="tech-icon" />} text="PostgreSQL" />
      <Badge icon={<img src={OpenCV} className="tech-icon" />} text="OpenCV" />
      <Badge icon={<img src={Keras} className="tech-icon" />} text="Keras" />
      <Badge icon={<img src={TensorFlow} className="tech-icon" />} text="TensorFlow" />
      <Badge icon={<img src={Pytorch} className="tech-icon" />} text="PyTorch" />
      <Badge icon={<img src={Git} className="tech-icon" />} text="Git" />
      <Badge icon={<img src={GitHub} className="tech-icon" />} text="GitHub" />
      <Badge icon={<img src={Docker} className="tech-icon" />} text="Docker" />
      <Badge icon={<img src={Kubernates} className="tech-icon" />} text="Kubernetes" />
      <Badge icon={<img src={Selenium} className="tech-icon icon-tight" />} text="Selenium" />
      <Badge icon={<img src={Jenkins} className="tech-icon icon-tight" />} text="Jenkins" />
      <Badge icon={<img src={Terraform} className="tech-icon icon-tight" />} text="Terraform" />
    </Row>
  );
}

export default Techstack;
