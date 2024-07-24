import { Link, useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import { useState } from 'react';
import axios from 'axios';
function Login(){

    const history = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function Submit(e){
        e.preventDefault();

        try{
            await axios.post("http://localhost:3000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home", {state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert('User does not have an account')
                }
            })
            .catch(e=>{
                alert('Authentication Revoked')
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }

    return(
        <form className={styles.form} action='POST'>
            <h1>Login Here..</h1>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your ID" className={styles.username} name='email'/>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter your Password" className={styles.password} name='password'/>
            <button onClick={Submit}>Submit</button>
            <p>Already have an Account <Link to='/signup' className={styles.link}>SignIn</Link></p>
        </form>
    )
}

export default Login;