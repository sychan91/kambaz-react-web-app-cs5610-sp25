import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoBeaker } from "react-icons/go";
import { BsEnvelopePaper } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuBookText } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

export default function KambazNavigation() {
  return (
    <ListGroup
      style={{ width: 75 }}
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        action
        href="https://northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        className="border-0 bg-black text-danger text-center wd-f-very-small wd-center"
      >
        <img src="/images/neulogo-2.png" className="wd-logo-sm" />
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Kambaz/Account"
        id="wd-account-link"
        className="border-0 bg-black text-white text-center wd-f-very-small"
      >
        <MdAccountCircle className="wd-icon-lg" />
        <br />
        Account
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
        className="border-0 bg-white text-danger text-center wd-f-very-small"
      >
        <IoSpeedometerOutline className="wd-icon-red wd-icon-md" />
        Dashboard
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Kambaz/Dashboard"
        id="wd-course-link"
        className="border-0 bg-black text-white text-center wd-f-very-small"
      >
        <LuBookText className="wd-icon-red wd-icon-md" />
        <br />
        Courses
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Kambaz/Calendar"
        id="wd-calendar-link"
        className="border-0 bg-black text-white text-center wd-f-very-small"
      >
        <FaRegCalendarAlt className="wd-icon-red wd-icon-md" />
        <br />
        Calendar
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Kambaz/Inbox"
        id="wd-inbox-link"
        className="border-0 bg-black text-white text-center wd-f-very-small"
      >
        <BsEnvelopePaper className="wd-icon-red wd-icon-md" />
        <br />
        Inbox
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Labs"
        id="wd-labs-link"
        className="border-0 bg-black text-white text-center wd-f-very-small"
      >
        <GoBeaker className="wd-icon-red wd-icon-md" />
        <br />
        Labs
      </ListGroup.Item>
    </ListGroup>
  );
}
