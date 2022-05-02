import React from "react";
import Post from "./Post/Post";
import style from "./Post/Post.module.css";

const MyPosts = (props) => {
  const postElement = props.postsPage.postData.map((p) => (
    <Post
      message = {p.message}
      likesCount = {p.likesCount}
      dislikesCount = {p.dislikesCount}
      key = {p.id}
    />
  ));
  const newPostText = props.newPostText;

  const onNewPostText = (e) => {
    const text = e.target.value;
    props.updateNewPostText(text);
  }

  const onaddPostUI = () => {
    props.addPostUI();
  }

  return (
    <div className = "myposts">
      <h4>My Posts</h4>
      <div>
        <div>
          <textarea
            onChange = {onNewPostText}
            value = {newPostText}
            placeholder = "Enter your post"
          />
        </div>
        <button onClick = {onaddPostUI}>add post</button>
      </div>
      <div className = {style.item}>{postElement}</div>
    </div>
  );
};

export default MyPosts;
