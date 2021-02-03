import React from 'react';
import style from './Post.module.css';


const Post = (props) => {

  

    return(
        <div className={style.item}>
            <img src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" alt="ava" />
            {props.message}
            <div>
            <button>like</button> { props.likesCount }
            <button>dislike</button> { props.dislikesCount }
            </div>
        </div>
    );
}
export default Post;