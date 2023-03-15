import React from 'react';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";


export const Logout = (props) => {

const {
    userLogout,
    email,
    user, 
    auth} = props;

const uid = auth.currentUser.uid;

const check = () => {      
        alert(auth.currentUser.uid)
}

return (
<div classname="Logout">
<div className="ShowName">
    <h4>Hi {email}!</h4>
    <button onClick={(userLogout)}>Logout</button>
</div>
</div>
)}