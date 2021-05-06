import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { maxLengthCreator, required } from "./../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo( props =>  {

  let postsElements = [...props.posts].reverse().map((p) => (
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
});

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
