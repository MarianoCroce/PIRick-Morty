import { useState } from "react";

function validar (input){
    let errors = {};
    let emailRegex = /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*\.\w{2,4}$/;
    let numbersRegex = /\d/;

    if(!input.email){
        errors.email = "Enter your email"
    }
    if(!emailRegex.test(input.email)){
        errors.email = "Invalid email";
    }
    if(input.email.length >= 35){
        errors.email = "No more than 35 characters please"
    }
    if(!numbersRegex.test(input.password)){
        errors.password = "Password must contain a number"
    }
    if(input.password.length < 6 || input.password.length > 10) {
        errors.password = "Password must be between 6 and 10 characters";
    }

    return errors

}

function Login({login}) {

    const [userData, setUserData] = useState ({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })

    function inputHandler(e){
        setUserData({
            ...userData,
            [e.target.name]:e.target.value
        })
        setErrors(validar({
            ...userData,
            [e.target.name]:e.target.value
    }))
    }
    

    function submitHandler(e){
        e.preventDefault()
        login(userData);// alert("Bienvenido")
    }   

    function disableHandler(){
        let disabled 
        for(let error in errors) {
            if(errors[error] === "") disabled = false
            else {
                disabled = true;
                break;
            }
        }
        return disabled;
    }

    return ( 
        <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>USERNAME</label>
                <input 
                type="text"
                name="email" 
                onChange={inputHandler} 
                placeholder="example@example.com"
                value={userData.email}
                />
                <span>{errors.email}</span>
            </div>
            <div>
                <label>PASSWORD</label>
                <input 
                name="password" 
                type="password"
                onChange={inputHandler} 
                placeholder="Password"
                value={userData.password}
                />
            </div>
            {errors.password && <span>{errors.password}</span>} 
            <button disabled={disableHandler()} type="submit">SUBMIT</button>
        </form>
        </div>
     );
}

export default Login;
