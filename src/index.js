import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
  addPost,
  updateNewPostText,
  addMes,
  updateNewMes,
  subscribe,
} from "./redux/state";
import state from "./redux/state";
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
          addMes={addMes}
          updateNewMes={updateNewMes}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
serviceWorker.unregister();
