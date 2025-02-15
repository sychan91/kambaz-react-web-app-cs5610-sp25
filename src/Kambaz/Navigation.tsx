import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { GoBeaker } from "react-icons/go";
import { BsEnvelopePaper } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuBookText } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

export default function KambazNavigation() {
  const { pathname, state } = useLocation();
  const links = [
    {
      label: "Dashboard",
      path: "/Kambaz/Dashboard",
      icon: IoSpeedometerOutline,
      id: "wd-dashboard-link",
      type: "dashboard",
    },
    {
      label: "Courses",
      path: "/Kambaz/Dashboard",
      icon: LuBookText,
      id: "wd-courses-link",
      type: "courses",
    },
    {
      label: "Calendar",
      path: "/Kambaz/Calendar",
      icon: FaRegCalendarAlt,
      id: "wd-calendar-link",
      type: "calendar",
    },
    {
      label: "Inbox",
      path: "/Kambaz/Inbox",
      icon: BsEnvelopePaper,
      id: "wd-inbox-link",
      type: "inbox",
    },
    {
      label: "Labs",
      path: "/Labs",
      icon: GoBeaker,
      id: "wd-labs-link",
      type: "labs",
    },
  ];
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
        className={`border-0 text-center wd-f-very-small ${
          pathname.includes("Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <MdAccountCircle className="wd-icon-lg" />
        <br />
        Account
      </ListGroup.Item>
      {links.map((link) => (
        <ListGroup.Item
          as={Link}
          to={link.path}
          id={link.id}
          className={`border-0 text-center wd-f-very-small ${
            pathname.includes(link.label)
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
        >
          <link.icon className="wd-icon-red wd-icon-md" />
          <br />
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
