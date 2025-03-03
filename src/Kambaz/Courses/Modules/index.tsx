import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlBtns from "./ModuleControlBtns";
import { useParams } from "react-router-dom";
import { useState } from "react";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const _modules = db.modules.filter((m: any) => m.course === cid);
  const [modules, setModules] = useState<any>(_modules);
  const [moduleName, setModuleName] = useState("New Module");
  const addModule = () => {
    setModules([
      ...modules,
      {
        _id: new Date().getTime().toString(),
        name: moduleName,
        course: cid,
        lessons: [],
      },
    ]);
    setModuleName("");
  };
  const deleteModule = (moduleId: string) => {
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  return (
    <div>
      <div className="wd-module-control-padding">
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={addModule}
        />
      </div>
      <ListGroup className="rounded-0 wd-top-padding wd-module-padding">
        {modules.map((module: any) => (
          <ListGroup.Item
            className="wd-module
                    p-0 mb-5 wd-f-small fw-semibold border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-5" />
              {module.name}
              <ModuleControlBtns
                moduleId={module._id}
                deleteModule={deleteModule}
              />
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-5" />
                    {lesson.name}
                    <LessonControlButtons />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
