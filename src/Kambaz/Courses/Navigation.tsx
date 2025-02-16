import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  return (
    <ListGroup id="wd-courses-navigation" className="wd rounded-0 wd-f-small">
      {links.map((link) => {
        const path = `/Kambaz/Courses/${cid}/${link}`;
        return (
          <ListGroup.Item
            key={link}
            className={`border-0 text-danger bg-color-white ${
              location.pathname === path ? "active" : ""
            }`}
            as={Link}
            to={path}
          >
            {link}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
