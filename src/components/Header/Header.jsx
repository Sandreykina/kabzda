import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ setisLoggedIn }) => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("./login")
    };
    const handleLogoutClick = () => {
        setisLoggedIn(false);
        navigate("/");
    };
    
    const handleLogoClick = () => {
        navigate("/")
    };
    
    return(
        <header className="header">
            Social Network
            <button
                onClick={handleLogoutClick}
            >Выйти из аккаунта</button>
            <button
                onClick={handleLoginClick}
            >Войти</button>
        </header>
    );
}

export default Header;