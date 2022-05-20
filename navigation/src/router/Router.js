import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Home from "../pages/Home";

function Router() {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<></>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;