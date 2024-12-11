import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignIUp from "../pages/SignUp";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <SignIn/> }/>
            <Route path="/register" element={ <SignIUp/> }/>
        </Routes>
    )
}

export default RoutesApp;