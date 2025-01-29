import { Route, Routes, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";

export default function Kambaz() {
  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset">
        <Routes>
          <Route path="/" element={<Navigate to="Account" />} />
          <Route path="Account/*" element={<Account />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:cid/*" element={<Courses />} />
          <Route path="Calendar" element={<h3>Calendar</h3>} />
          <Route path="Inbox" element={<h3>Inbox</h3>} />
        </Routes>
      </div>
    </div>
  );
}
