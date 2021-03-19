import React from 'react';
import './../Post/Post';
import Post from './../Post/Post';
import './../Post/Post.module.css';
import './MyPost.css';

let PostData = [
        { id: 1, message: 'I like it', likesCount: 11},
        { id: 2, message: 'I like it too', likesCount: 13},
        { id: 3, message: 'My post is very cute', likesCount: 101},
        { id: 4, message: 'Noooo', likesCount: 90}
]

let PostElement = PostData.map ( p =>  <Post message = {p.message} likesCount = {p.likesCount}  />)


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
               {PostElement}
            </div>
        </div>
    );
}
export default MyPost;