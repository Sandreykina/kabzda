import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/posts_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        postsPage: state.postsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPostUI: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
