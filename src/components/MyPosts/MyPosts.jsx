import React from 'react';
import Post from './Post/Post';
import style from './Post/Post.module.css';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/posts_reducer';
import './MyPosts.css';

const MyPosts = (props) => {

    let postElement = props.state.postData.map(p => <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);

    let addPostUI = () => {
        props.dispatch(addPostActionCreator());
    };
    let onPostChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className="myposts">
            <h4>My Posts</h4>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.state.newPostText} placeholder="Enter your post" />
                </div>
                <button onClick={addPostUI} >post</button>
            </div>
            <div className={style.item}>
                {postElement}

            </div>

        </div>

    );
}
export default MyPosts;