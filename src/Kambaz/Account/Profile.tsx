import { Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="wd-account-component-width">
      <h3>Profile</h3>
      <FormControl
        defaultValue="alice"
        placeholder="username"
        className="wd-acc-margin-spacing"
      />
      <FormControl
        defaultValue="123"
        type="password"
        placeholder="password"
        className="wd-acc-margin-spacing"
      />
      <FormControl
        defaultValue="Alice"
        placeholder="First Name"
        className="wd-acc-margin-spacing"
      />
      <FormControl
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="wd-acc-margin-spacing"
      />
      <FormControl
        defaultValue="2000-01-01"
        type="date"
        className="wd-acc-margin-spacing"
      />
      <FormControl
        defaultValue="alice@wonderland"
        type="email"
        className="wd-acc-margin-spacing"
      />
      <FormControl
        className="wd-acc-margin-spacing"
        defaultValue="FACULTY"
        as="select"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormControl>
      <Button variant="danger" href="#/Kambaz/Account/Signin">
        Sign out
      </Button>
    </div>
  );
}
