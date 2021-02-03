import React from 'react';
import Post from './../Post/Post';
import './../Post/Post.module.css';
import './MyPost.css';



const MyPost = (props) => {

    let PostData = [
        // { id: 1, message: 'Hi, how are you?', likesCount='23', dislikesCount='4' },
        // { id: 2, message: 'It is my first post', likesCount='13', dislikesCount='2' },
        // { id: 3, message: 'I like it, bro', likesCount='0', dislikesCount='32' },
        { id: 1, message: 'Hi, how are you?', likesCount:'23', dislikesCount: '22'},
        { id: 2, message: 'It is my first post', likesCount:'203', dislikesCount: '2' },
        { id: 3, message: 'I like it, bro', likesCount:'523', dislikesCount: '2' },
        { id: 4, message: 'I am a good girl', likesCount:'223', dislikesCount: '12' },
        

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
                <Post message={PostData[0].message} likesCount={PostData[0].likesCount} dislikesCount={PostData[0].dislikesCount} />
                <Post message={PostData[1].message} likesCount={PostData[1].likesCount} dislikesCount={PostData[1].dislikesCount} />
                <Post message={PostData[2].message} likesCount={PostData[2].likesCount} dislikesCount={PostData[2].dislikesCount} />

            </div>

        </div>

    );
}
export default MyPost;