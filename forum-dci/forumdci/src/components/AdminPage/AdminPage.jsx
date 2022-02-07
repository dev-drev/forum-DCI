import React, {useState} from "react";

import SubNavbar from "../QuestionsPage/SubNavbar";
import Avatar from "./Avatar";
import Navbar from "../Navbar";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

    // if (!isAuthenticated) {
    //     window.location = "/login";
    //     return;
    // }

    return (
        <>
            <Navbar/>
            <div className="bg-secondary lg:bg-white">
                <SubNavbar/>
                <Avatar/>
            </div>
        </>
    );
}
