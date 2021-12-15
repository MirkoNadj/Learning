import React from "react";
import {Routes, Route, useNavigate, useParams, Link} from "react-router-dom";
import FirstNested from "./FirstNested";
import SecondNested from "./SecondNested";

function NestedPages() {
    let navigate = useNavigate();
    let {username} = useParams();
    let isLoged = false;

    return (

    <div>THIS IS THE NESTED PAGES PAGE FOR {username}!
                <button onClick={() => {navigate("/about")}}>Change to about page</button>
                {(isLoged)? <FirstNested /> : <SecondNested />}
                <Link to="/nested/first-nested">First Nested</Link>
                <Link to="/nested/second-nested">Second Nested</Link>
        <Routes>
        <Route path={"first-nested"} element={<h2>FirstNested </h2>} />
        <Route path={"second-nested"} element={<h2>SecondNested </h2>} />
        </Routes>
    </div>
    )
}

export default NestedPages;