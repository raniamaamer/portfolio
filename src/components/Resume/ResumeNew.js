import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdfFR from "../../Assets/../Assets/Rania_Maamer_CV.pdf";
import pdfEN from "../../Assets/../Assets/Rania_Maamer_CV_EN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [lang, setLang] = useState("fr"); // "fr" ou "en"

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const pdf = lang === "fr" ? pdfFR : pdfEN;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Boutons de langue */}
        <Row style={{ justifyContent: "center", marginBottom: "15px" }}>
          <Button
            variant={lang === "fr" ? "primary" : "outline-primary"}
            onClick={() => setLang("fr")}
            style={{ maxWidth: "100px", marginRight: "10px" }}
          >
            FR
          </Button>
          <Button
            variant={lang === "en" ? "primary" : "outline-primary"}
            onClick={() => setLang("en")}
            style={{ maxWidth: "100px" }}
          >
            EN
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document key={lang} file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;