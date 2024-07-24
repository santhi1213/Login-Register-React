import { Link, useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import { useState } from "react";
import axios from 'axios';

function Register(){

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function Submit(e){
        e.preventDefault();

        try{
            await axios.post("http://127.0.0.1:3000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exist")
                }
                else if(res.data==="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert('Authentication Revoked');
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }


    return(
        <form className={styles.form} action='POST'>
            <h1>Signup Here..</h1>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your ID" className={styles.username} name='email'/>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your Password" className={styles.password} name='password'/>
            <button onClick={Submit}>Submit</button>
            <p>Already have an Account <Link to='/' className={styles.link}>Login</Link></p>
        </form>
    )
}

export default Register;

