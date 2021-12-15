import React from "react";
import {Link} from "react-router-dom"

function FirstNested() {
    return <div><h1>THIS IS THE FIRST NESTED PAGE</h1>   
                <Link to="/profile">Profile</Link>
            </div>
            
}

export default FirstNested;