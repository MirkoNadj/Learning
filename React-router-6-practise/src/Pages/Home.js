import React from "react";
import {Link} from "react-router-dom"

function Home() {
    return <div><h1>THIS IS THE HOME PAGE</h1>   
                <Link to="/profile">Profile</Link>
            </div>
            
}

export default Home;