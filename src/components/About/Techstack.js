import React from "react";
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
import Oracle from "../../Assets/TechIcons/Oracle.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
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

const techs = [
  { img: HTML, name: "HTML" },
  { img: CSS, name: "CSS" },
  { img: Javascript, name: "Javascript" },
  { img: Typescript, name: "Typescript" },
  { img: Tailwind, name: "Tailwind CSS" },
  { img: Node, name: "Node.Js" },
  { img: ReactIcon, name: "React.Js" },
  { img: NestJS, name: "NestJS" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { img: Flask, name: "Flask" },
  { img: Python, name: "Python" },
  { img: Java, name: "Java" },
  { img: Firebase, name: "Firebase" },
  { img: Postman, name: "Postman" },
  {img : Oracle , name: "Oracle"},
  { img: Mongo, name: "Mongo DB" },
  { img: OpenCV, name: "OpenCV" },
  { img: Keras, name: "Keras" },
  { img: TensorFlow, name: "TensorFlow" },
  { img: Pytorch, name: "Pytorch" },
  { img: Git, name: "Git" },
  { img: GitHub, name: "GitHub" },
  { img: Docker, name: "Docker" },
  { img: Kubernates, name: "Kubernetes" },
  { img: Selenium, name: "Selenium" },
  { img: Jenkins, name: "Jenkins" },
  { img: Terraform, name: "Terraform" },
];

function Techstack() {
  return (
    <div className="tech-container">
      {techs.map((tech, index) => (
        <div className="tech-icons" key={index}>
          {tech.img ? (
            <img src={tech.img} alt={tech.name} />
          ) : (
            tech.icon
          )}
          <div className="tech-icons-text">{tech.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
