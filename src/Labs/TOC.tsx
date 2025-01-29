import { Col, Nav, NavItem, NavLink, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function TOC() {
  const { pathname } = useLocation();
  return (
    <Row>
      <Col xs="2">
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <NavLink as={Link} to="/Labs" id="wd-a">
              Labs
            </NavLink>
          </Nav.Item>
          <NavItem>
            <NavLink
              as={Link}
              to="/Labs/Lab1"
              id="wd-a1"
              className={pathname.includes("Lab1") ? "active" : ""}
            >
              Lab 1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as={Link}
              to="/Labs/Lab2"
              id="wd-a2"
              className={pathname.includes("Lab2") ? "active" : ""}
            >
              Lab 2
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              as={Link}
              to="/Labs/Lab3"
              id="wd-a3"
              className={pathname.includes("Lab3") ? "active" : ""}
            >
              Lab 3
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="https://github.com/sychan91/kambaz-react-web-app-cs5610-sp25/tree/main"
              id="wd-github"
            >
              My Github Repo
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink as={Link} to="/Kambaz" id="wd-k">
              Kambaz
            </NavLink>
          </NavItem>
        </Nav>
      </Col>
    </Row>
  );
}
