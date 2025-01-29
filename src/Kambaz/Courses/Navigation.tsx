import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <ListGroup id="wd-courses-navigation" className="wd rounded-0 wd-small">
      <ListGroup.Item
        className="active border-0"
        as={Link}
        to="/Kambaz/Courses/1234/Home"
      >
        Home
      </ListGroup.Item>

      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to="/Kambaz/Courses/1234/Modules"
      >
        Modules
      </ListGroup.Item>

      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to="/Kambaz/Courses/1234/Piazza"
      >
        Piazza
      </ListGroup.Item>

      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to="/Kambaz/Courses/1234/Zoom"
      >
        Zoom
      </ListGroup.Item>

      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to="/Kambaz/Courses/1234/Assignments"
      >
        Assignments
      </ListGroup.Item>

      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to="/Kambaz/Courses/1234/Quizzes"
      >
        Quizzes
      </ListGroup.Item>

      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to="/Kambaz/Courses/1234/Grades"
      >
        Grades
      </ListGroup.Item>

      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to="/Kambaz/Courses/1234/People"
      >
        People
      </ListGroup.Item>
    </ListGroup>
  );
}
