import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlBtns from "./ModuleControlBtns";

export default function Modules() {
  return (
    <div>
      <div className="wd-module-control-padding">
        <ModulesControls />
      </div>
      <ListGroup className="rounded-0 wd-top-padding wd-module-padding">
        <ListGroup.Item
          className="wd-module
                    p-0 mb-5 wd-f-small fw-semibold border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-5" />
            Week 1
            <ModuleControlBtns />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-5" />
              LESSON 1
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-5" />
              LESSON 2
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item
          className="wd-module
                               p-0 mb-5 wd-f-small fw-semibold border-gray"
        >
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-5" />
            Week 2
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-5" />
              LESSON 1
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-5" />
              LESSON 2
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
