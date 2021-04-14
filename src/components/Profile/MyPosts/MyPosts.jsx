import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let addNewPost = (values) => {
   props.addPost(values.newPostText)
  };


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
<AddPostFormRedux onSubmit={addNewPost} />
      
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props)=>{
  return <form onSubmit={props.handleSubmit}>
  <div>
    <Field component="textarea" name="newPostText" placeholder="Add post" />
  </div>
  <div>
    <button>Add post</button>
  </div>
</form>
}
const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)
export default MyPosts;
