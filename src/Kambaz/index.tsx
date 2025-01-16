import { Route, Routes, Navigate } from "react-router-dom";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";

export default function Kambaz() {
    return (
        <div id="wd-kambaz">
            <h1>Kambaz</h1>
            <table>
                <tr>
                    <td valign="top">
                        <KambazNavigation/>
                    </td>
                    <td valign='top'>
                        <Routes>
                            <Route path="/" element={<Navigate to="Account" />} />
                            <Route path="Account/*" element={<Account />} />
                            <Route path="Dashboard" element={<Dashboard />} />
                            <Route path="Courses" element={<h3>Courses</h3>} />
                            <Route path="Inbox" element={<h3>Inbox</h3>} />
                        </Routes>
                    </td>    
                </tr>
            </table>
        </div>
    );
}