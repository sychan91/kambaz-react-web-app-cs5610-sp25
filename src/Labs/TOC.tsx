import { Link } from 'react-router-dom';

export default function TOC() {
    return (
        <ul>
            <li><Link to="/Labs" id="wd-a">Labs</Link></li>
            <li><Link to="/Labs/Lab1" id="wd-a1">Lab 1</Link></li>
            <li><Link to="/Labs/Lab2" id="wd-a2">Lab 2</Link></li>
            <li><Link to="/Labs/Lab3" id="wd-a3">Lab 3</Link></li>
            <li><a href="https://github.com/sychan91/kambaz-react-web-app-cs5610-sp25/tree/main" id="wd-github">My Github Repo</a></li>
        </ul>
    );
}