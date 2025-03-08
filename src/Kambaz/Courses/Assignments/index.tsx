import { ListGroup } from "react-bootstrap";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { Link, useParams } from "react-router-dom";
import { IoEllipsisVertical } from "react-icons/io5";
import { TfiPlus } from "react-icons/tfi";
// import { db } from "../../Database";
import { useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) =>
    state.assignments?.assignments?.filter((a: any) => a.course === cid)
  );
  return (
    <div id="wd-assignments">
      <div className="wd-module-control-padding">
        <AssignmentControls />
      </div>
      <ListGroup className="rounded-0 wd-assignment-padding">
        <ListGroup.Item className="wd-module p-0 mb-5 wd-f-small fw-semibold border-gray">
          <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
            <span className="fw-bold">ASSIGNMENTS</span>
            <div className="d-flex align-items-center">
              <div
                className="rounded-pill px-3 py-1 bg-secondary border wd-thin-black-border me-3"
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "480",
                }}
              >
                40% of Total
              </div>
              <TfiPlus className="fs-6 me-2" />
              <IoEllipsisVertical className="fs-6" />
            </div>
          </div>
          <ListGroup className="wd-assignments rounded-0">
            {assignments.map((assignment: any) => (
              <ListGroup.Item
                key={assignment._id}
                className="wd-assignment p-3 d-flex align-items-center wd-lesson"
              >
                <div className="d-flex align-items-center me-3">
                  <BsGripVertical className="fs-5 me-2" />
                  <LuNotebookPen className="fs-6" />
                </div>

                <div className="assignment-text">
                  <span>
                    <Link
                      to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="fw-bold text-black text-decoration-none"
                    >
                      {assignment.title}
                    </Link>
                    <br />
                    <span className="wd-assignment-f-small">
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <b>Not available until</b> {assignment.availableUntil} at{" "}
                      {assignment.availableTime}
                    </span>
                    <br />
                    <span className="wd-assignment-f-small">
                      <b>Due</b> {assignment.dueDate} at {assignment.dueTime} |{" "}
                      {assignment.points}pts
                    </span>
                  </span>
                </div>

                <div className="ms-auto">
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
