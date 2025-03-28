import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlBtns from "./ModuleControlBtns";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import * as db from "../../Database";
import {
  addModule,
  editModule,
  updateModule,
  deleteModule,
  setModules,
} from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  // const _modules = db.modules.filter((m: any) => m.course === cid);
  // const [modules, setModules] = useState<any>(_modules);
  const [moduleName, setModuleName] = useState("New Module");
  const modules = useSelector((state: any) =>
    state.modules.modules.filter((module: any) => module.course === cid)
  );
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };
  // const addModule = () => {
  //   setModules([
  //     ...modules,
  //     {
  //       _id: new Date().getTime().toString(),
  //       name: moduleName,
  //       course: cid,
  //       lessons: [],
  //     },
  //   ]);
  //   setModuleName("");
  // };
  // const deleteModule = (moduleId: string) => {
  //   setModules(modules.filter((m: any) => m._id !== moduleId));
  // };
  // const editModule = (moduleId: string) => {
  //   setModules(
  //     modules.map((m: any) =>
  //       m._id === moduleId ? { ...m, editing: true } : m
  //     )
  //   );
  // };
  // const updateModule = (module: any) => {
  //   setModules(modules.map((m: any) => (m._id === module._id ? module : m)));
  // };
  return (
    <div>
      <div className="wd-module-control-padding">
        <ModulesControls
          setModuleName={setModuleName}
          moduleName={moduleName}
          addModule={createModuleForCourse}
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
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) =>
                    dispatch(updateModule({ ...module, name: e.target.value }))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(updateModule({ ...module, editing: false }));
                    }
                  }}
                  defaultValue={module.name}
                />
              )}

              <ModuleControlBtns
                moduleId={module._id}
                deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
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
