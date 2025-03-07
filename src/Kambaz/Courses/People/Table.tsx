import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { db } from "../../Database";
import { useParams } from "react-router-dom";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;
  return (
    <div id="wd-people-table">
      <Table striped className="wd-f-small">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr) =>
              enrollments.some(
                (enrollment: any) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-2 text-secondary" />
                  <span className="wd-first-name text-danger wd-f-small">
                    {user.firstName}
                  </span>{" "}
                  <span className="wd-last-name text-danger wd-f-small">
                    {user.lastName}
                  </span>
                </td>
                <td className="wd-login-id wd-f-small">{user.loginId}</td>
                <td className="wd-section wd-f-small">{user.section}</td>
                <td className="wd-role wd-f-small">{user.role}</td>
                <td className="wd-last-activity wd-f-small">
                  {user.lastActivity}
                </td>
                <td className="wd-total-activity wd-f-small">
                  {user.totalActivity}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
