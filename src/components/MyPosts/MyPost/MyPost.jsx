import React from 'react';
import Post from './../Post/Post';
import './../Post/Post.module.css';
import './MyPost.css';


const MyPost = () => {

    return (
        <div className="myposts">
            <h4>My Posts</h4>
            <div>
                <div>
                    <textarea>Enter your post</textarea>
                </div>

                <button>post</button>
            </div>
            <div className="item">
               POSTS

            </div>

        </div>

    );
}
export default MyPost;