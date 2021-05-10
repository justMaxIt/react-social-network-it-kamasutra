import profileReducer,{ addPostActionCreator, deletePost }  from "./profileReducer";
// import React from 'react';
// import { render } from '@testing-library/react';

let state = {
  posts: [
    { id: "1", message: "Hi, how are you?", likesCount: "15" },
    { id: "2", message: "It's ok", likesCount: "20" },
    { id: "3", message: "third", likesCount: "2" },
    { id: "4", message: "fourth", likesCount: "5" },
  ]};

test('posts length should be incremented', () => {

  // 1. test start data
  let action = addPostActionCreator("This is success")
  
    // 2. action
  let newState = profileReducer(state, action)

  // 3. expectation
  expect(newState.posts.length).toBe(5)
});

test('new post message should be correct', () => {
  // 1. test start data
  let action = addPostActionCreator("It works!")
      // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts[4].message).toBe("It works!")
});

test('after deleting posts length should be decremented', () => {
  // 1. test start data
  let action = deletePost(1)
      // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(4)
});

test('after deleting length should be the same if id is incorrect', () => {
  // 1. test start data
  let action = deletePost(1000)
      // 2. action
  let newState = profileReducer(state, action)
  // 3. expectation
  expect(newState.posts.length).toBe(4)
});

