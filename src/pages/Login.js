import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
    return(
        <Template
        title="Welcome Back"
        desp1 = "Build skills today, tomorrow, and beyond."
        desp2 = "Education to future proof your carrer"
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Login