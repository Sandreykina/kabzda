import React from 'react';
import style from './Post.module.css';

const Post = ({ post }) => {
    const img = post?.img ? (<img src={post?.img} alt="ava" />) : (<img src="https://iconarchive.com/download/i48697/custom-icon-design/pretty-office-2/man.ico" alt='ava2'/>)
    return(
        <div className={style.item}>
            { img }
            <div className={style.itemText}>
                {post?.description?.length > 500 ? post?.description.slice(0, 500) + '...' : post?.description}
            </div>
        </div>
    );
}

export default Post;
