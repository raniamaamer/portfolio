import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Me.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Rania Maamer, a Business Intelligence and Data Science graduate, 
              as well as a Data Scientist. I love transforming complex data into 
              valuable insights and developing powerful applications that 
              make a real impact.
              <br />
              <br />
              I have strong proficiency in
              <i>
                <b className="purple">
                  {" "}
                  Python, JavaScript{" "} 
                </b>
              with practical experience in building full-stack applications using
              </i>
              <i>
                <b className="purple">
                  {" "}
                  React, Node.js{" "}
                </b>
                and applying
              </i>
              <i>
                <b className="purple">
                  {" "}
                  NLP{" "}
                </b>
              techniques within machine learning and data science projects.
              </i>
              <br />
              <br />
              I enjoy delving into data to reveal meaningful insights. I am passionate about developing innovative solutions 
              in areas such as
              <i>
                <b className="purple">
                  {" "}
                  data analytics, machine learning, natural language processing,{" "}
                </b>
              </i>
              with a strong focus on creating scalable and impactful systems.
              <br />
              <br />
              Whenever possible, I enjoy building intelligent AI solutions leveraging
            <i>
              <b className="purple">
              {" "}
              machine learning models, deep learning architectures, and natural language processing techniques{" "}
              </b>
            </i>
              for data analysis, prediction, and decision support.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
