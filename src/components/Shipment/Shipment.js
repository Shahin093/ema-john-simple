import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value);
    }
    if (user) {
        Navigate("/shop");
    }

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (address !== phone) {
            setError('Your two passwords did not match');
            return;
        }
        if (address.length < 6) {
            setError('Password must be 6 character or longer');
            return;
        }
        createUserWithEmailAndPassword(email, address);
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='from-title'>Shipping Information </h2>
                <form onSubmit={handleCreateUser} action="">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} className='demo' type="name" name='name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='demo' type="email" name='email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" required id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Phone Number</label>
                        <input type="text" onBlur={handlePhoneNumberBlur} name="phone" required id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
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

export default Shipment;