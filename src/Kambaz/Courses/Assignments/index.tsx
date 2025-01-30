import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="wd-module-control-padding">
        <AssignmentControls />
      </div>
      <ListGroup className="rounded-0 wd-assignment-padding wd-module-padding">
        <ListGroup.Item className="wd-module p-0 mb-5 wd-f-small fw-semibold border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">ASSIGNMENTS</div>
          <ListGroup className="wd-assignments rounded-0">
            <ListGroup.Item className="wd-assignment p-3 d-flex align-items-center">
              <div className="d-flex align-items-center me-3">
                <BsGripVertical className="fs-5 me-2" />
                <LuNotebookPen className="fs-6" />
              </div>

              <div className="assignment-text">
                <span>
                  <Link
                    to="/Kambaz/Courses/1234/Assignments/123"
                    className="fw-bold text-black text-decoration-none"
                  >
                    A1 - ENV + HTML
                  </Link>
                  <br />
                  <span className="wd-assignment-f-small">
                    Multiple Modules | <b>Not available until</b> May 6 at
                    12:00am
                  </span>
                  <br />
                  <span className="wd-assignment-f-small">
                    <b>Due</b> May 13 at 11:59pm | 100pts
                  </span>
                </span>
              </div>

              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment p-3 d-flex align-items-center">
              <div className="d-flex align-items-center me-3">
                <BsGripVertical className="fs-5 me-2" />
                <LuNotebookPen className="fs-6" />
              </div>

              <div className="assignment-text">
                <span>
                  <Link
                    to="/Kambaz/Courses/1234/Assignments/123"
                    className="fw-bold text-black text-decoration-none"
                  >
                    A2 - CSS + BOOTSTRAP
                  </Link>
                  <br />
                  <span className="wd-assignment-f-small">
                    Multiple Modules | <b>Not available unit</b> May 13 at
                    12:00am
                  </span>
                  <br />
                  <span className="wd-assignment-f-small">
                    <b>Due</b> May 20 at 11:59pm | 100pts
                  </span>
                </span>
              </div>

              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment p-3 d-flex align-items-center">
              <div className="d-flex align-items-center me-3">
                <BsGripVertical className="fs-5 me-2" />
                <LuNotebookPen className="fs-6" />
              </div>

              <div className="assignment-text">
                <span>
                  <Link
                    to="/Kambaz/Courses/1234/Assignments/123"
                    className="fw-bold text-black text-decoration-none"
                  >
                    A3 - JAVASCRIPT + REACT
                  </Link>
                  <br />
                  <span className="wd-assignment-f-small">
                    Multiple Modules | <b>Not available unit</b> May 20 at
                    12:00am
                  </span>
                  <br />
                  <span className="wd-assignment-f-small">
                    <b>Due</b> May 27 at 11:59pm | 100pts
                  </span>
                </span>
              </div>

              <div className="ms-auto">
                <LessonControlButtons />
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
