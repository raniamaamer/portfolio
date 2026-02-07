import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spam from "../../Assets/Projects/spam.png";
import courses from "../../Assets/Projects/courses.png";
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
              ghLink="https://github.com/raniamaamer/Facial-Recognition"
              demoLink="https://reconnaissance-faciale.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mood}
              isBlog={false}
              title="Mental Journal"
              description="Development of an intelligent application that analyzes emotions in written text using natural language processing techniques to monitor changes in emotional well-being over time."
              ghLink="https://github.com/raniamaamer/Mental_Being_Journal"
              demoLink=" https://mentaljournal.vercel.app/"
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
              demoLink="https://gestion-projets-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={courses}
              isBlog={false}
              title="Courses App"
              description="Web application for managing educational courses, enabling users to add and organize courses 
              through a simple, intuitive, and user-friendly interface."
              ghLink="https://github.com/raniamaamer/CoursesApp"
              demoLink="https://courses-app-web.vercel.app/courses-list"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
