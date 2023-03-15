import React from 'react'

export const Input = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        userLogin,
        passwordError} = props;

    return(
        <div className="Input">
            <h4>
                Log in
            </h4>
            <div className="User">
            <input
                type="text"
                placeholder="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="Pass">
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn" onClick={() => {userLogin()}}>Sign in</button>
        </div>
    )

}