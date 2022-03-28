import './App.css';
import PageNotFound from "./components/PageNotFound/PageNotFound";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <div className={'main-container'}>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/UserDetails/:user" element={<UserDetails/>}/>
                        <Route path={'*'} element={<PageNotFound/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App