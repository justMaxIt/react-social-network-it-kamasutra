import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Component } from "react";
import { Provider, connect } from "react-redux";
import {initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/reduxStore";


class App extends Component  {
  componentDidMount() {
    this.props.initializeApp();
  }
  render () {

if (!this.props.initialized){
  return <Preloader />
}

    return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />

      <div className="app-wrapper-content">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" />
        <Route path="/music" />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/settings" />
      </div>
    </div>
  );
}}

const mapStateToProps = (state) => ({
initialized: state.app.initialized
})

let AppContainer = compose(
   withRouter, 
   connect(mapStateToProps, { initializeApp }))(App);


 const SamuraiJSApp = (props)=> {
 return  <BrowserRouter>
   <Provider store={store}>
   <React.StrictMode>
     <AppContainer />
     </React.StrictMode>
     </Provider>
 </BrowserRouter>}
 export default SamuraiJSApp