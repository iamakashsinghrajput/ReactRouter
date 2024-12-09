import React from "react";
import signupImg from "../assets/signup.png"
import Template from "../components/Template";

const Signup = ({setIsLoggedIn}) => {
    return(
        <Template
        title="Join the millions learning to code with StudyNotion for free"
        desp1 = "Build skills today, tomorrow, and beyond."
        desp2 = "Education to future proof your carrer"
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
        />
    )
}
export default Signup