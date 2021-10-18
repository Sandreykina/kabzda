import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import MyPosts from './components/MyPosts/MyPosts';
import Music from './components/Music/Music';
import MyFriends from './components/MyFriends/MyFriends';
import Settings from './components/Settings/Settings';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav state = {props.state.navSection}/>
        <div className="app-wrapper-content">
          <Route path = '/profile' render = {() => <Profile /> } />
          <Route path = '/dialogs' render = {() => <Dialogs state = {props.state.messagesPage}/> } />
          <Route path = '/myposts' render = {() => <MyPosts state = {props.state.postsPage} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/> } />
          <Route path = '/news' render = {() => <News /> } />
          <Route path = '/music' render = {() => <Music /> } />
          <Route path = '/myfriends' render = {() => <MyFriends state = {props.state.myfriendsPage} /> } />
          <Route path = '/settings' render = {() => <Settings /> } />

        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
