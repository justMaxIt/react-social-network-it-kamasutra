import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { maxLengthCreator, required } from "./../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

class MyPosts extends Component  {
  render(){
  let postsElements = this.props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let addNewPost = (values) => {
    this.props.addPost(values.newPostText)
  };


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostFormRedux onSubmit={addNewPost} />

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}};

const AddPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea} name="newPostText" placeholder={"Add post"}
        validate={[required, maxLength10]} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}
const AddPostFormRedux = reduxForm({ form: "profileAddPostForm" })(AddPostForm)
export default MyPosts;
