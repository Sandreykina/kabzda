import React from 'react';
import Post from './../Post/Post';
import './../Post/Post.css';
import './MyPost.css';


const MyPost = (props) => {
    debugger;
    return(
        <div>
            My Posts
            <div>
                <textarea>Enter your post</textarea>
            <button>post</button>
            </div>
            <div className="item">
                <Post message="Hi, how are you?" />
                <Post message="It is my first post" />
                
                
            </div>
            
        </div>
        
    );
}
export default MyPost;