import React from 'react';
import Post from './Post/Post';
import style from './Post/Post.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../redux/state';
import './MyPosts.css';

const MyPosts = (props) => {

    let postElement = props.state.postData.map(p => <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);

    let newPostElement = React.createRef();

    
    let addPostUI = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action);
    };

    return (
        <div className="myposts">
            <h4>My Posts</h4>
            <div>
                <div>
                    <textarea onChange = {onPostChange} ref={newPostElement} value = {props.newPostText} />
                </div>
                <button onClick={addPostUI}>post</button>
            </div>
            <div className={style.item}>
                {postElement}

            </div>

        </div>

    );
}
export default MyPosts;