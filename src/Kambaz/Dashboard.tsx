import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> CS1234 React JS </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src='/images/neulogo.jpg' width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> CS5001 Intensive Foundations of Computer Science </Link>
            <p className="wd-dashboard-course-title">
              Introduction to Computer Science </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src='/images/neulogo.jpg' width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> CS5002 Discrete Structures </Link>
            <p className="wd-dashboard-course-title">
              Learn about Discrete Structures </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src='/images/neulogo.jpg' width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> CS5004 Object-Oriented Programming </Link>
            <p className="wd-dashboard-course-title">
              Introduction to OOP and Java </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src='/images/neulogo.jpg' width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> CS5008 Datastructures & Algorithms </Link>
            <p className="wd-dashboard-course-title">
              Precuror to CS 5008 Algorithms </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src='/images/neulogo.jpg' width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> CS5600 Database Management Systems </Link>
            <p className="wd-dashboard-course-title">
              DBMS </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <img src='/images/neulogo.jpg' width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> CS5800 Algorithms </Link>
            <p className="wd-dashboard-course-title">
              Deep dive into Algorithms </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
);}
