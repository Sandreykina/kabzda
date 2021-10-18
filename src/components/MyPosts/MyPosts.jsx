import React from 'react';
import Post from './Post/Post';
import style from './Post/Post.module.css';
import './MyPosts.css';

const MyPosts = (props) => {
    debugger;

    let postElement = props.state.postData.map(p => <Post message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />);

    let newPostElement = React.createRef();

    let addPostUI = () => {
        debugger;
        props.addPost();
    };

    let onPostChange = () => {
        
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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