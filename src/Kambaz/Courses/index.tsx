import {
  Route,
  Routes,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useState, useEffect } from "react";
import * as client from "./client";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();

  function PeopleTabWrapper() {
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
      const fetchEnrolled = async () => {
        if (!cid) return;
        try {
          const response = await client.findUsersForCourse(cid);
          console.log("Fetched enrolled users:", response);
          setUsers(response);
        } catch (err) {
          console.error("Failed to load enrolled users:", err);
        }
      };
      fetchEnrolled();
    }, [cid]);

    return <PeopleTable users={users} />;
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/").pop()}
      </h2>
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTabWrapper />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
