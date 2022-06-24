import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Login.css';
import { auth } from "./firebase";


function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history('/')
            })
            .catch(e => alert(e.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history('/')
                }
            })
            .catch(e => alert(e.message))
    }

  return (
    <div className='login'>
        <NavLink to='/'>
            <img 
                className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
            />
        </NavLink>

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange=
                {e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type='password' value={password} 
                onChange={e => setPassword(e.target.value)}
                />

                <button type='submit' onClick={signIn}
                className='login__signInButton'>Sign in</button>
            </form>

            <p>
                By signing, in you agree to the Terms and conditions of AMAZON CLONE. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create Amazon clone account</button>
        </div>

    </div>
  )
}

export default Login


