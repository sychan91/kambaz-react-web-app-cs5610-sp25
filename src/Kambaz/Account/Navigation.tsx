import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const links = ["Signin", "Signup", "Profile"];
  const { pathname } = useLocation();
  return (
    <ListGroup id="wd-account-navigation" className="wd rounded-0 wd-f-small">
      {links.map((link) => (
        <ListGroup.Item
          active={pathname.includes(link)}
          className="border-0 text-danger bg-color-white"
          as={Link}
          to={`/Kambaz/Account/${link}`}
        >
          {link}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
