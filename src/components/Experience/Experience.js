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

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10}>
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>
                  PFE Intern — Data & BI Engineer — <span className="purple">DXC Technology Tunisia</span>
                </Card.Title>

                <Card.Subtitle className="mb-3 purple">
                    Feb 2026 – Jun 2026 | Ariana, Tunisia
                </Card.Subtitle>


                <Card.Text style={{ textAlign: "justify" }}>
                  • Designed and developed a decisional <strong>Data Intelligence Dashboard</strong> for a multilingual contact center (15 accounts, 150 queues, 500K+ contacts).
                  <br />
                  • Automated an <strong>ETL pipeline (Python/Django)</strong> from Amazon Connect to PostgreSQL, computing contractual KPIs (SLA, abandon rate, AHT, ASA), validated at 100% against DXC's reference data.
                  <br />
                  • Built a <strong>REST API</strong> (Django REST Framework) and a real-time <strong>React.js dashboard</strong> (6 interfaces: Overview, Accounts, Queues, Hourly Trends, SLA Config, Live Metrics).
                  <br />
                  • Designed an ensemble <strong>ML forecasting module</strong> (XGBoost + Prophet) to predict contact volumes at J+7/J+30, with 80% confidence intervals (R² up to 0.99).
                  <br />
                  • Set up a full <strong>DevOps infrastructure</strong>: Docker Compose containerization, CI/CD pipeline with Jenkins/SonarQube (test coverage: 98.5%).
                </Card.Text>

                <Card.Text>
                  <strong>Technologies:</strong> Python, Django, React.js, PostgreSQL, Docker, Jenkins, SonarQube, XGBoost, Prophet
                </Card.Text>
                <Card.Text>
                  <strong>Methodology:</strong> CRISP-DM / Scrum
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