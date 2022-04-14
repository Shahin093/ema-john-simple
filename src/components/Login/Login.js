import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlue = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }
    const handleUserSignIn = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>Login </h2>
                <form onSubmit={handleUserSignIn} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='demo' type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Passoword</label>

                        <input onBlur={handlePasswordBlue} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}> {error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
                <div className='or'>
                    <p ></p>
                    <h5>OR</h5>
                    <p></p>
                </div>
                <div>
                    <p className=''> </p>
                    <FontAwesomeIcon className='icon' icon="fan-table" />
                    <button >
                        Continue with Google
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;