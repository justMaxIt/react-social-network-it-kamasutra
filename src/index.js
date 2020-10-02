import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let posts = [
  { id: "1", message: "Hi, how are you?", likesCount: "15" },
  { id: "2", message: "It's ok", likesCount: "20" },
];

let dialogs = [
  { id: "1", name: "Max" },
  { id: "2", name: "Vova" },
  { id: "3", name: "Denis" },
  { id: "4", name: "Sveta" },
  { id: "5", name: "Tanya" },
];
let messages = [
  { id: "1", message: "Hi" },
  { id: "2", message: "friend" },
  { id: "3", message: "yo" },
  { id: "4", message: "yo" },
  { id: "5", message: "yo" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
