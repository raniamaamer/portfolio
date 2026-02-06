import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Rania Maamer</span>{" "}
            from <span className="purple">Tunisia</span>.
            <br />
            <br />
            I’m currently working on projects.{" "} 
            <br />
              I have a passion for learning new technologies and exploring
              innovative solutions in the field of data science and software development.
             <br />
            
            I enjoy delving into data to reveal meaningful insights.{" "}.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking 🍳
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing 🎥
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography 📸
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rania</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
