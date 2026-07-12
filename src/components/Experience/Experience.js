import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>
                  BI Intern — <span className="purple">Attijari Leasing</span>
                </Card.Title>

                <Card.Subtitle className="mb-3 purple">
                    Jan 2024 – Apr 2024 | Tunis, Tunisia
                </Card.Subtitle>


                <Card.Text style={{ textAlign: "justify" }}>
                  • Developed a desktop application with secure user and admin authentication.
                  <br />
                  • Managed business queries and production reports defined by department managers.
                  <br />
                  • Designed a predictive Power BI dashboard for monitoring production quality
                  and financing strategy.
                  <br />
                  • Worked with enterprise data using SSMS and SSIS for ETL and reporting.
                  <br />
                  • Followed <strong>SCRUM methodology</strong> within the BI team.
                </Card.Text>

                <Card.Text>
                  <strong>Technologies:</strong> C#, Power BI, SSMS, SSIS
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
