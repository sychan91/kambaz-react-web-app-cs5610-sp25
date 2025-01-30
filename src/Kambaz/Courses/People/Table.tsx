import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
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
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-2 text-secondary" />
              <span className="wd-first-name wd-f-small">Tony</span>{" "}
              <span className="wd-last-name wd-f-small">Stark</span>
            </td>
            <td className="wd-login-id wd-f-small">001234561S</td>
            <td className="wd-section wd-f-small">S101</td>
            <td className="wd-role wd-f-small">STUDENT</td>
            <td className="wd-last-activity wd-f-small">2020-10-01</td>
            <td className="wd-total-activity wd-f-small">10:21:32</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-2 text-secondary" />
              <span className="wd-first-name wd-f-small">Bruce</span>{" "}
              <span className="wd-last-name wd-f-small">Wayne</span>
            </td>
            <td className="wd-login-id wd-f-small">001234562S</td>
            <td className="wd-section wd-f-small">S101</td>
            <td className="wd-role wd-f-small">STUDENT</td>
            <td className="wd-last-activity wd-f-small">2020-11-02</td>
            <td className="wd-total-activity wd-f-small">15:32:43</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-2 text-secondary" />
              <span className="wd-first-name wd-f-small">Steve</span>{" "}
              <span className="wd-last-name wd-f-small">Rogers</span>
            </td>
            <td className="wd-login-id wd-f-small">001234563S</td>
            <td className="wd-section wd-f-small">S101</td>
            <td className="wd-role wd-f-small">STUDENT</td>
            <td className="wd-last-activity wd-f-small">2020-10-02</td>
            <td className="wd-total-activity wd-f-small">23:32:43</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-2 text-secondary" />
              <span className="wd-first-name wd-f-small">Natasha</span>{" "}
              <span className="wd-last-name wd-f-small">Romanoff</span>
            </td>
            <td className="wd-login-id wd-f-small">001234564S</td>
            <td className="wd-section wd-f-small">S101</td>
            <td className="wd-role wd-f-small">TA</td>
            <td className="wd-last-activity wd-f-small">2020-11-05</td>
            <td className="wd-total-activity wd-f-small">13:23:34</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-2 text-secondary" />
              <span className="wd-first-name wd-f-small">Thor</span>{" "}
              <span className="wd-last-name wd-f-small">Odinson</span>
            </td>
            <td className="wd-login-id wd-f-small">001234565S</td>
            <td className="wd-section wd-f-small">S101</td>
            <td className="wd-role wd-f-small">STUDENT</td>
            <td className="wd-last-activity wd-f-small">2020-12-01</td>
            <td className="wd-total-activity wd-f-small">11:22:33</td>
          </tr>
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-2 text-secondary" />
              <span className="wd-first-name wd-f-small">Bruce</span>{" "}
              <span className="wd-last-name wd-f-small">Banner</span>
            </td>
            <td className="wd-login-id wd-f-small">001234566S</td>
            <td className="wd-section wd-f-small">S101</td>
            <td className="wd-role wd-f-small">STUDENT</td>
            <td className="wd-last-activity wd-f-small">2020-12-01</td>
            <td className="wd-total-activity wd-f-small">22:33:44</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
