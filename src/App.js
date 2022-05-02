import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import MyFriends from './components/MyFriends/MyFriends';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import MyPostsContainer from './components/MyPosts/MyPostsContainer';

const App = () => {
  return (
      <div className="app-wrapper">
        <Header />
        {/* <Nav /> */}
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile />} />
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/myposts' render={() => <MyPostsContainer />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/myfriends' render={() => <MyFriends />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
  );
}

export default App;
