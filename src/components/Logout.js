import React from 'react';
import {List} from "./List";
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";


export const Logout = (props) => {

const {
    userLogout,
    user, 
    auth} = props;

const uid = auth.currentUser.uid;
const email = user.email;

return (
<div className="Logout">
<div className="ShowName">
    <h4>Hi {email}!</h4>
    <div>
    <button onClick={(userLogout)}>Logout</button>
    </div>
    <div>
        <List
            uid={uid}/>
    </div>
</div>
</div>
)}