import React from 'react';
import './../Post/Post';
import Post from './../Post/Post';
import './../Post/Post.module.css';
import './MyPost.css';



const MyPost = () => {

    let PostData = [
        { id: 1, message: 'I like it', likesCount: 11},
        { id: 2, message: 'I like it too', likesCount: 13},
        { id: 3, message: 'My post is very cute', likesCount: 101},
        { id: 4, message: 'Noooo', likesCount: 90}
    ]

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
               <Post message = {PostData[0].message} likesCount = {PostData[0].likesCount}  />
               <Post message = {PostData[1].message} likesCount = {PostData[1].likesCount}  />
               <Post message = {PostData[2].message} likesCount = {PostData[2].likesCount} />
               <Post message = {PostData[3].message} likesCount = {PostData[3].likesCount} />
            </div>

        </div>

    );
}
export default MyPost;