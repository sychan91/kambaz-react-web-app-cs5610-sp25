import { Col, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignment-editor" style={{ width: "600px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" placeholder="A1 - ENV + HTML" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={20}
            placeholder={`The assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following\n\n- Your full name and section\n- Links to each of the lab assignments\n- Link to the Kanbs application\n- Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex align-items-center"
          style={{ width: "100%" }}
        >
          <Form.Label
            className="pe-2"
            style={{ width: "300px", textAlign: "right" }}
          >
            Points
          </Form.Label>
          <Form.Control type="number" placeholder="100" />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex align-items-center"
          style={{ width: "100%" }}
        >
          <Form.Label
            className="pe-2 text-nowrap"
            style={{ width: "300px", textAlign: "right" }}
          >
            Assignment Group
          </Form.Label>
          <Form.Select>
            <option selected>ASSIGNMENT</option>
            <option>PROJECT</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex align-items-center"
          style={{ width: "100%" }}
        >
          <Form.Label
            className="pe-2 text-nowrap"
            style={{ width: "300px", textAlign: "right" }}
          >
            Display Grade as
          </Form.Label>
          <Form.Select>
            <option selected>Percentage</option>
            <option>Raw Score</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          className="d-flex align-items-start"
          style={{ width: "100%" }}
        >
          <Form.Label
            className="pe-2 text-nowrap"
            style={{ width: "300px", textAlign: "right" }}
          >
            Submission Type
          </Form.Label>
          <div
            id="submission-type-container"
            style={{
              width: "600px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxSizing: "border-box",
              marginTop: "0",
              marginBottom: "20px",
            }}
          >
            <Form.Select className="mb-4">
              <option>Online</option>
            </Form.Select>
            <Form.Label className="fw-bold">Online Entry Options</Form.Label>
            <Form.Check type="checkbox" label="Text Entry" />
            <Form.Check type="checkbox" label="Website URL" />
            <Form.Check type="checkbox" label="Media Recordings" />
            <Form.Check type="checkbox" label="Student Annotation" />
            <Form.Check type="checkbox" label="File Uploads" />
          </div>
        </Form.Group>
        <Form.Group
          className="d-flex align-items-start"
          style={{ width: "100%" }}
        >
          <Form.Label
            className="pe-2 text-nowrap"
            style={{ width: "300px", textAlign: "right" }}
          >
            Assign
          </Form.Label>
          <div
            id="submission-type-container"
            style={{
              width: "600px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxSizing: "border-box",
              marginTop: "0",
              marginBottom: "20px",
            }}
          >
            <Form.Label className="fw-bold">Assign to</Form.Label>
            <Form.Select className="mb-3">
              <option>Everyone</option>
            </Form.Select>
            <Form.Label className="fw-bold">Due</Form.Label>
            <Form.Control className="mb-2" type="date" />
            <Form.Group as={Row} className="mb-3 g-1">
              <Col>
                <Form.Label className="mb-0 wd-f-small fw-bold">
                  Available
                </Form.Label>
                <Form.Control type="date" />
              </Col>
              <Col>
                <Form.Label className="mb-0 wd-f-small fw-bold">
                  Until
                </Form.Label>
                <Form.Control type="date" />
              </Col>
            </Form.Group>
          </div>
        </Form.Group>
        <hr />
      </Form>
    </div>
  );
}
