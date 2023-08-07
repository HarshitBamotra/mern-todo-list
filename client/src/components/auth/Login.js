import React, { useState } from "react";
import "./auth.css"

function Login(){

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    function onChangeEmail(event){
        setEmail(event.target.value);
    }
    function onChangePassword(event){
        setPassword(event.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        const userDetails = {
            email:email,
            password:password
        };
        console.log(userDetails);
    }

    return(
        <div className="auth-container">
            <div className="auth-wrapper">
                <form>
                    <div className="auth-heading">
                        Login
                    </div>
                    <div className="auth-fields">
                        <div className="auth-field-name">
                            e-mail
                        </div>
                        <input type="email" required name="email" className="auth-input" onChange={onChangeEmail}/>
                        <div className="auth-field-name">
                            password
                        </div>
                        <input type="password" required name="password" className="auth-input" onChange={onChangePassword}/>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;