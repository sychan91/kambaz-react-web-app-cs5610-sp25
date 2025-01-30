import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>{" "}
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>{" "}
        </li>
        Multiple Modueles | <b>Not available until</b> May 6 at 12:00am
        <br />
        <b>Due</b> May 13 at 11:59pm | 100pts
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/456"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>{" "}
        </li>
        Multiple Modueles | <b>Not available until</b> May 13 at 12:00am
        <br />
        <b>Due</b> May 20 at 11:59pm | 100pts
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/789"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>{" "}
        </li>
        Multiple Modueles | <b>Not available until</b> May 20 at 12:00am
        <br />
        <b>Due</b> May 27 at 11:59pm | 100pts
      </ul>
    </div>
  );
}
