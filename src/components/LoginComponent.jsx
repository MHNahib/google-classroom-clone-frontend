import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
    const navigate = useNavigate();
    const [emailOrId, setemailOrId] = useState("")
    const [password, setPassowrd] = useState("")

    const baseUrl = (process.env.REACT_APP_API + "login");

    const loginUser = async (e) => {
        e.preventDefault()
        console.log(emailOrId, password);
        const response = await fetch(baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailOrId,
                password,
            }),
        });

        const responseData = await response.json();
        if (responseData.isSuccess) {
            localStorage.setItem("token", responseData.data.token);
            navigate("/dashboard")
        }

    }
    return (
        <div className="m-4">
            <h1 className="text-3xl font-bold mb-2">Login</h1>
            <form onSubmit={loginUser}>
                <input type="text" placeholder="Email or user id" value={emailOrId} onChange={e => setemailOrId(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassowrd(e.target.value)} />
                <input type="submit" value="Login" />
            </form>
        </div >
    );
};

export default LoginComponent;
