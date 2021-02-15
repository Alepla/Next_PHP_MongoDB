import React from "react";
import UserAPI from "../../lib/api/user";
import axios from "axios";

const LoginForm = () => {
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleUserChange = React.useCallback(
        (e) => setUser(e.target.value),
        []
    );
    const handlePasswordChange = React.useCallback(
        (e) => setPassword(e.target.value),
        []
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UserAPI.login(user, password);
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
                        type="text"
                        placeholder="Username"
                        value={user}
                        onChange={handleUserChange}
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