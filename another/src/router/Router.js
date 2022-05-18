import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Page1 from "../pages/Page1";
import Page2 from "../pages/Page2";

function Router(props) {
    return (
        <>
            <BrowserRouter basename="another">
                <Routes>
                    <Route path="/" element={<Home name={props.name} />} />
                    <Route path="1" element={<Page1 name={props.name} />} />
                    <Route path="2" element={<Page2 name={props.name} />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;