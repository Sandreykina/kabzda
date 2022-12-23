import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login =({ setAdmin, setisLoggedIn }) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginChange = (e) => {
        setLogin(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginClick = () => {
        axios.post('http://localhost:5000/api/login',  {
            login: login,
            password: password
        }).then(res => {
            console.log('res.data', res.data)
            if (res.data) {
                console.log('a')
                setAdmin(res.data);
                setisLoggedIn(true);
                window.localStorage.setItem('auth-token', '1234')
                navigate("../profile");
            } else {
                alert('неверные данные')
            }
        }).catch(
            console.log('Login error')
        )
        setLogin('');
        setPassword('');
    }

    return (
        <div>
            <div className=''>
                <input
                    required
                    placeholder="login"
                    name="login"
                    id="login"
                    value={login}
                    onChange={handleLoginChange}
                    type="text"
                    className="input"
                    minLength={2}
                    maxLength={30}
                />
                <input
                    required
                    placeholder="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    type="text"
                    className="input"
                    minLength={8}
                    maxLength={30}
                />
            </div>
            <button onClick={handleLoginClick}
            className="button"
            >Войти</button>
        </div>
    );
}

export default Login;