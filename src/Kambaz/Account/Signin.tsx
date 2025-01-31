import { Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="wd-account-component-width">
      <h3>Sign in</h3>
      <FormControl id="wd-username" placeholder="username" className="mb-2" />
      <FormControl
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2"
      />
      <Button
        variant="primary"
        size="sm"
        className="w-100 mb-2"
        href="#/Kambaz/Dashboard"
      >
        Sign in
      </Button>
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}

<Link to="/Kambaz/Account/Signup" id="wd-signup-link">
  Sign up
</Link>;
