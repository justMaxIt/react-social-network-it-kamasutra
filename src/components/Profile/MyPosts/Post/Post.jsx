import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://leadslive.io/wp-content/uploads/2017/05/Miniclip-8-Ball-Pool-Avatar-11.png"
        alt="img"
      />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
};
export default Post;
