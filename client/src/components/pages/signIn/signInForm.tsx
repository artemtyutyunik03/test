import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../../../firebase";
import {useNavigate} from "react-router";
import React from "react";
import SignInInput from "./signInInput";
import {ISignInForm} from "../../../interfaces/interfaces";


export default function SignInForm() {

    const onSubmit= (data: ISignInForm) => loginHandler(data.login, data.password)
    const navigate = useNavigate();

    const loginHandler = (login: string, password: string)  => {
        const auth = getAuth(app);

        signInWithEmailAndPassword(auth, login, password)
            .then(() => {
                navigate('home')
            })
            .catch(e => console.log(e))
    }


    return <SignInInput onSubmit={onSubmit}/>
}