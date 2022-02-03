import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css'
import './css/index.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import UserDetails from "./UserDetails";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/UserDetails/:user" element={<UserDetails/>}/>
            </Routes>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);