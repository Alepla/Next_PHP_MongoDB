import React from "react";
import UserAPI from "../../lib/api/user";
import axios from "axios";

const LoginForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleEmailChange = React.useCallback(
        (e) => setEmail(e.target.value),
        []
    );
    const handlePasswordChange = React.useCallback(
        (e) => setPassword(e.target.value),
        []
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           /*  await fetch('http://127.0.0.1:8000/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({ user: { email, password }})
            }).then(res => { console.log(res); }) */
            await axios.post('http://127.0.0.1:8000/api/users/login', JSON.stringify({ user: { email, password }}),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            } );

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
    
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <fieldset className="form-group">
                    <input
                        className="form-control form-control-lg"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    </fieldset>
        
                    <fieldset className="form-group">
                    <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    </fieldset>
        
                    <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    >
                    Sign in
                    </button>
                </fieldset>
            </form>
        </>
    );

};

export default LoginForm;