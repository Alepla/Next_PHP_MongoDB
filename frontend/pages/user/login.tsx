import Head from "next/head";
import React from "react";
import LoginForm from "../../components/profile/LoginForm";


const Login = () => (
    <>
        <Head>
            <title>LOGIN</title>
            <meta name="description" content="Please login" />
        </Head>
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                <div className="col-md-6 offset-md-3 col-xs-12">
                    <h1 className="text-xs-center">Sign in</h1>
                    <p className="text-xs-center">
                    </p>
                    <LoginForm />
                </div>
                </div>
            </div>
        </div>
    </>
);

export default Login;