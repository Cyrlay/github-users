import Header from "../Header/Header";
import React from "react";
import GetUserDetails from "../FetchData/GetUserDetails";

export default function UserDetails() {

    return (
        <div className="app">
            <Header/>
            <GetUserDetails/>
        </div>
    )
}