import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfrimPasswordBlur = event => {
        setConfrimPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confrimPassword) {
            setError('Your two passwords did not match');
            return;
        }
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>SignUp </h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='demo' type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Passoword</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">confrim Passoword</label>
                        <input type="password" onBlur={handleConfrimPasswordBlur} name="confrim-password" required id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already have an account? ? <Link className='form-link' to='/login'>Login</Link>
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

export default SignUp;