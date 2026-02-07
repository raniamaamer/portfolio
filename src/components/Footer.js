import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Rania Maamer</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} RM</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/raniamaamer"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/rania-maamer-305b50250/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
            <a
              href="mailto:raniamaaamer@gmail.com"
              style={{ color: "white" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineMail />
            </a>
          </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
