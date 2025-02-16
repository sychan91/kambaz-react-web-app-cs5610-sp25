import { Button, Card, Col, Form, Row } from "react-bootstrap";
import * as db from "../../Database";
import { useParams, useNavigate } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const assignment = db.assignments.find(
    (a) => a._id === aid && a.course === cid
  );
  return (
    <div id="wd-assignment-editor" className="ps-3" style={{ width: "600px" }}>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={assignment?.title}
            placeholder="A1 - ENV + HTML"
          />
        </Form.Group>
        <Card>
          <Card.Body
            className="mb-2"
            contentEditable={true}
            style={{ minHeight: "300px" }}
          >
            {assignment?.description || "Add assignment description here"}
          </Card.Body>
        </Card>
        <br />
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
          <Form.Control
            type="number"
            defaultValue={assignment?.points}
            placeholder="100"
          />
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
            <Form.Control
              className="mb-2"
              type="date"
              defaultValue={assignment?.dueDate}
            />
            <Form.Group as={Row} className="mb-3 g-1">
              <Col>
                <Form.Label className="mb-0 wd-f-small fw-bold">
                  Available
                </Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={assignment?.availableFrom}
                />
              </Col>
              <Col>
                <Form.Label className="mb-0 wd-f-small fw-bold">
                  Until
                </Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={assignment?.availableUntil}
                />
              </Col>
            </Form.Group>
          </div>
        </Form.Group>
        <hr />
        <div id="wd-assignment-editor-btns" className="text-nowrap">
          <Button
            variant="danger"
            size="sm"
            className="me-1 mb-4 float-end"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
          >
            Save
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="me-1 mb-4 float-end"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments`)}
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
}
