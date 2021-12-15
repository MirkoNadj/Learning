import React from "react";
import {Link} from "react-router-dom"

function SecondNested() {
    return <div><h1>THIS IS THE SECOND NESTED PAGE</h1>   
                <Link to="/profile">Profile</Link>
            </div>
            
}

export default SecondNested;