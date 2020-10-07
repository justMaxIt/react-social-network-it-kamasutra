import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.state.sidebar} />

      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile
              profilePage={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dialogsPage={props.state.dialogsPage}
              addMes={props.addMes}
              updateNewMes={props.updateNewMes}
            />
          )}
        />
        <Route path="/news" />
        <Route path="/music" />
        <Route path="/settings" />
      </div>
    </div>
  );
};

export default App;
