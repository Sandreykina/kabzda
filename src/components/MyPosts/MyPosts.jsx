import "./MyPosts.css";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Post from './Post/Post';

const MyPosts = ({ posts, setPosts }) => {
  const [postText, setPostText] = useState('');

  const onNewPostText = (e) => {
    setPostText(e.target.value);
  }

  const handleAddPostClick = () => {
    axios.post('http://localhost:5000/api/addPost',  {
      id: posts.lenght,
        title: '',
        description: postText,
        img: '',
        comments: [],
        likeCount: 0,
        isLiked: false,
    }).then(res => {
      const newPost = [...res.data];
      setPosts(newPost);
      setPostText('');
    }).catch(
        console.log('Add post error')
    )
  }

  useEffect(() => {
    setPostText('');
  }, [posts]);

  const postElement = posts?.map(post => {
    return <Post post={post} key={post?._id}/>
  });

  return (
    <div className="myposts">
      <h4>My Posts</h4>
      <div>
        <div>
          <input
            onChange = {onNewPostText}
            className='input'
            // value = {newPostText}
            placeholder = "Enter your post"
          />
        </div>
        <button
          className='button'
          onClick={handleAddPostClick}
        >add post</button>
      </div>
      <div className='item'>{postElement}</div>
    </div>
  );
};

export default MyPosts;
