import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfrimPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfrimPasswordBlur = event => {
        setConfrimPassword(event.target.value);
    }
    if (user) {
        navigate("/shop");
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confrimPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 character or longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);


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