import React from "react";

import SubNavbar from "../QuestionsPage/SubNavbar";
import Avatar from "./Avatar";
import Navbar from "../Navbar";

export default function AdminPage() {
    return (
        <><Navbar/>
            <div className="bg-secondary lg:bg-white">
                <SubNavbar/>
                <Avatar/>
            </div>
        </>
    );
}
