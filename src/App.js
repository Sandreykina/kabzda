import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import MyPosts from './components/MyPosts/MyPosts';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';

const App = () => {
  const [admin, setAdmin] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [posts, setPosts] = useState();
  const token = window.localStorage.getItem('auth-token');

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
    } catch (e) {
      throw e;
    }
  }

  useEffect(() => {
    setisLoggedIn(!!token);
  }, [token]);

  useEffect(() =>  {
    fetchPosts();
  }, []);
  
  return (
    <div className="app-wrapper">
      <Header setisLoggedIn={setisLoggedIn}/>
      <Nav />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<MyPosts posts={posts} setPosts={setPosts}/>} />
          <Route path="/profile" element={<Profile
            admin={admin}
            isLoggedIn={isLoggedIn}
          />} />
          <Route path="/login" element={<Login
            setisLoggedIn={setisLoggedIn}
            setAdmin={setAdmin}
          />} />
          
          {/* <Route path="/myposts/:id" element={<FullPost />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
