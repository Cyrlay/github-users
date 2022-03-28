import '../../App.css';
import Header from "../Header/Header";
import {Container} from "react-bootstrap";
import GetUserList from "../FetchData/GetUserList";
import React from "react";

function HomePage() {
    return (
        <Container className="app">
            <Header/>
            <div className="app-body">
                <GetUserList/>
            </div>
        </Container>
    )
}

export default HomePage
