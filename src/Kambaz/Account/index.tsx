import { Route, Routes, Navigate } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";
import Profile from "./Profile";
import AccountNavigation from "./Navigation";

export default function Account() {
    return (
        <div id="wd-account-screen">
            <h2>Account</h2>
            <table width="100%">
                <tr>
                    <td valign="top">
                        <AccountNavigation/>
                    </td>
                    <td>
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
                            <Route path="Signin" element={<Signin />} />
                            <Route path="Signup" element={<Signup />} />
                            <Route path="Profile" element={<Profile />} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    );
}