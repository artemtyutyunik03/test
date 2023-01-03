import React from 'react';
import {Route, Routes} from "react-router";
import SignInPage from "./components/pages/signIn/signInPage";
import SignUpPage from "./components/pages/signUp/signUpPage";
import Home from "./components/Home";

function Routers() {
    return (
        <Routes>
            <Route path='/' element={<SignInPage/>}/>
            <Route path='/sign-up' element={<SignUpPage/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    );
}

export default Routers;