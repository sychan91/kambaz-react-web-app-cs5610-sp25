import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card className="h-100 d-flex flex-column">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  width="100%"
                  src="/images/reactjs.webp"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS1234 React JS
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Full Stack software developer
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  width="100%"
                  src="/images/reactjs.webp"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5001 Foundations of Computer Science
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Introduction to Computer Science
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  width="100%"
                  src="/images/reactjs.webp"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5002 Discrete Structures
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Learn about discrete structures
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  width="100%"
                  src="/images/reactjs.webp"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5004 Object-Oriented Programming
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Introduction to OOP and Java
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  width="100%"
                  src="/images/reactjs.webp"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5008 Data Structures & Algorithms
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Precursor to CS 5008 Algorithms
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  width="100%"
                  src="/images/reactjs.webp"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5200 Database Management Systems
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    DBMS
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kambaz/Courses/1234/Home"
              >
                <Card.Img
                  variant="top"
                  width="100%"
                  src="/images/reactjs.webp"
                  height={160}
                />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title">
                    CS5800 Advanced Algorithms
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description">
                    Deep dive into algorithms
                  </Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
