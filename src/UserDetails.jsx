import Header from "./components/Header/Header";
import React from "react";
import GetUserDetails from "./components/FetchData/GetUserDetails";

export default function UserDetails() {

    return (
        <div className="app">
            <Header/>
            <GetUserDetails/>
        </div>
    )

}