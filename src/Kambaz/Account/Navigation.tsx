import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <ListGroup id="wd-account-navigation" className="wd rounded-0 wd-f-small">
      <ListGroup.Item
        className="active border-0"
        as={Link}
        to={"/Kambaz/Account/Signin"}
      >
        Sign in
      </ListGroup.Item>{" "}
      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to={"/Kambaz/Account/Signup"}
      >
        Sign up
      </ListGroup.Item>{" "}
      <ListGroup.Item
        className="border-0 text-danger bg-color-white"
        as={Link}
        to={"/Kambaz/Account/Profile"}
      >
        Profile
      </ListGroup.Item>{" "}
    </ListGroup>
  );
}
