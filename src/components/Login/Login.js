import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>Login </h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input className='demo' type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Passoword</label>
                        <input type="password" name="password" id="" required />
                    </div>
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