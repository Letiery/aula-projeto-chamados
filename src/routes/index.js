import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignIUp from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={ <SignIn/> }/>
            <Route path="/register" element={ <SignIUp/> }/>
            <Route path="/dashboard" element={ <Dashboard/> }/>
        </Routes>
    )
}

export default RoutesApp;