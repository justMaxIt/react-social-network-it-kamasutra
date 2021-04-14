import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  let addNewPost = () => {
    alert( "kdfjkv")
  };


  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
<AddPostFormRedux onSubmit={addNewPost} />
      {/* <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div> */}
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const AddPostForm = (props)=>{
  return <form onSubmit={props.handleSubmit}>
  <div>
    <Field component="textarea" name="newPostText" placeholder="Add post"
      // onChange={onPostChange}
      // ref={newPostElement}
      // value={props.newPostText}
    />
  </div>
  <div>
    <button>Add post</button>
  </div>
</form>
}
const AddPostFormRedux = reduxForm({form: "profileAddPostForm"})(AddPostForm)
export default MyPosts;
