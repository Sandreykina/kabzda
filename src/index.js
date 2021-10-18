import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state.js';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)} 
                updateNewPostText={store.updateNewPostText.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );

    reportWebVitals();
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
