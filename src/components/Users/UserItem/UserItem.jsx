import React from "react";
import style from "../../Dialogs/Dialogs.module.css";

const UserItem = (props) => {
  console.log('props', props);
  return (
    <div className={style.messages}>
      <div className="item">
        <img
          src={props.photoURL}
          alt="ava"
        />
        {props.name}
        {/* {props.followed ?
          <button onClick { () => { props.follow(props.id) }}>Unfollowed</button>
          : <button onClick { props.unfollow(props.id) }>Followed</button>
        } */}
      </div>
    </div>
  );
};

export default UserItem;
