import {List} from "./List";
import {Logout} from "./Logout";
import {Input} from "./Input";
import React, { useEffect, useState } from "react";
import app from './firebase';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";

import "../App.css";
import { useAuthState } from 'react-firebase-hooks/auth';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);
    const[user] = useAuthState(auth);
    const [person, setPerson] = useState('');
    const [unknown, setUnknown] = useState(true);
    //useAuthState(auth);
    //const [person] = useState('');


    const userLogin = () => {
        signInWithEmailAndPassword(auth, email, password);
    }

    const userLogout =() => {
        reset();
        auth.signOut();
        reset();
    }

    const reset = () => {
        setPerson("")
        setEmail("")
        setPassword("")
    }
        
        
    return (
        <div className="App">
            <div className="Login">
                <div className="container">
                    {user ? 
                        (<Logout
                            userLogout={userLogout}
                            email={email}
                            user={user}
                            auth={auth}/>) : 
                        (<Input
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            userLogin={userLogin}/>
                            )}
                </div>
            </div>
        </div>
    )
}

export default Login;