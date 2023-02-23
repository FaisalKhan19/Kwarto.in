import React, { useState } from "react";
import RegisterForm from "../component/RegisterForm";
import axios  from "axios";

const Register = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ password, setPassword ] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.table({name,email,password,phone});
        try {
            const res = await axios.post('http://localhost:8000/api/register', {
                name, email,phone,password
            });
            console.log('Register User ===> ',res)
        } catch(err) {
            console.log(err);
        }
        };

    return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Register</h1>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-md-6 offset-md-3"><RegisterForm handleSubmit={handleSubmit} name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} password={password} setPassword={setPassword}/></div>
                </div>
            </div>;
        </>

    )
};
export default Register;