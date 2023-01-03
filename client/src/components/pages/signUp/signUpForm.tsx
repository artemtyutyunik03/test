import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from "../../../firebase";
import React from "react";
import SignUpInputs from "./signUpInputs";

interface ISignInForm{
    login: string;
    password: string;
}

function SignUpForm() {

    const onSubmit = (data: ISignInForm) => signUpHandler(data.login, data.password)

    function signUpHandler(login: string, password: string) {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, login, password)
            .then(console.log)
            .catch(e => console.log(e))
    }

    return <SignUpInputs onSubmit={onSubmit}/>
}

export default SignUpForm;