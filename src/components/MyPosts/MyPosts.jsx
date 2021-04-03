import React from 'react';
import Post from './Post/Post';
import style from './Post/Post.module.css';
import './MyPosts.css';



const MyPosts = (props) => {
;
    let postElement = props.state.postData.map(p => <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />)

    return (
        <div className="myposts">
            <h4>My Posts</h4>
            <div>
                <div>
                    <textarea>Enter your post</textarea>
                </div>
                <button>post</button>
            </div>
            <div className={style.item}>
                {postElement}
               
            </div>

        </div>

    );
}
export default MyPosts;