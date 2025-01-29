import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";

export default function BootstrapForms() {
  return (
    <div id="wd-css-styling-forms">
      <h2>Forms</h2>
      <Form>
        <FormGroup>
          <FormLabel htmlFor="email1">Email address</FormLabel>
          <FormControl
            type="email"
            id="email1"
            placeholder="name@example.com"
          />
          <br />
          <FormLabel htmlFor="textarea1">Example textarea</FormLabel>
          <FormControl as="textarea" id="textarea1" rows={3} />
        </FormGroup>
      </Form>
      <div id="wd-css-styling-dropdowns">
        <h3>Dropdowns</h3>
        <Form>
          <FormGroup>
            <FormSelect>
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </FormSelect>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
