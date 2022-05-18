import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

function Router() {
    return (
        <>
            <BrowserRouter basename="demo">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="1" element={<Page1 />} />
                    <Route path="2" element={<Page2 />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;