import React, { createRef } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer"
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
  let action = updateNewPostTextActionCreator(text)
  props.dispatch(action)
  };


  return (
    <MyPosts updateNewPostText={onPostChange} addPost={addPost}/>
  );
};
export default MyPostsContainer;
