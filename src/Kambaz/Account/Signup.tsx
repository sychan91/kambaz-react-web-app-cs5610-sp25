// import React from "react";
import { FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="wd-account-component-width">
      <h3>Sign up</h3>
      <FormControl id="wd-username" placeholder="username" className="mb-2" />
      <FormControl
        id="wd-password"
        type="password"
        placeholder="password"
        className="mb-2"
      />
      <FormControl
        id="wd-password-verify"
        type="password"
        placeholder="verify password"
        className="mb-2"
      />

      <Link to="/Kambaz/Account/Profile">Sign up</Link>
      <br />
      <Link to="/Kambaz/Account/Signin">Sign out</Link>
    </div>
  );
}
