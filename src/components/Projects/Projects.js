import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spam from "../../Assets/Projects/spam.png";
import emotion from "../../Assets/Projects/emotion.png";
import scraping from "../../Assets/Projects/scraping.png";
import project from "../../Assets/Projects/project.png";
import mood from "../../Assets/Projects/mood.png";
import facialRecognition from "../../Assets/Projects/facialRecognition.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facialRecognition}
              isBlog={false}
              title="Facial Recognition System"
              description="Development of a robust facial recognition system using PCA, LDA, and CNNs to ensure accurate and reliable identification under varying lighting, pose, and facial expressions."
              ghLink="https://github.com/raniamaamer/facial-recognition-with-PCA-LDA-CNN"
              demoLink="http://192.168.1.53:8501/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mood}
              isBlog={false}
              title="Mental Journal"
              description="Development of an intelligent application that analyzes emotions in written text using natural language processing techniques to monitor changes in emotional well-being over time."
              ghLink="https://github.com/raniamaamer/Mental_Being_Journal"
              demoLink=" https://mental-being-journal-vl5h.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scraping}
              isBlog={false}
              title="Animal Disease Scraping"
              description="Automated system for scraping, processing, and analyzing veterinary articles using Selenium, Ollama (LLM), and Dash to enable multilingual epidemiological surveillance and insight extraction."
              ghLink="https://github.com/raniamaamer/Maladies-Animales"
              demoLink="https://web-production-6b2cc4.up.railway.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="Spam Email Detection"
              description="Automatically detect spam messages (unwanted emails) within an email dataset in order to identify the most effective model."
              ghLink="https://github.com/raniamaamer/spam-email-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Project Manager"
              description="Development of a web-based project management application allowing users to create, track, and delete projects and their tasks, with real-time data storage on Firebase."
              ghLink="https://github.com/raniamaamer/project-manager-app-with-react"
              demoLink="https://project-manager-app-with-react.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
