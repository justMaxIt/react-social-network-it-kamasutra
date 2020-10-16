import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.state.sidebar.sidebar} />

      <div className="app-wrapper-content">
        <Route
          path="/profile"
          render={() => (
            <Profile />
          )}
        />
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer />
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
