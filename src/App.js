import React from 'react'
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
//  import Post from './components/MyPosts/Post/Post';
//  import MyPost from './components/MyPosts/MyPost/MyPost';

const App= ()=>  {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Profile />
      
    </div>
  );
}

export default App;
