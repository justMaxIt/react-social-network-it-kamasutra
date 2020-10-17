import React from "react";
import StoreContext from "../../../StoreContext";
import Friends from "./Friends";

const FriendsContainer = () => {

  // sidebar={props.state.sidebar.sidebar}

  return (
    <StoreContext.Consumer>
      { (store) => {
        let state=store.getState().sidebar.sidebar
        return <Friends state={state}/>
      }}
      </StoreContext.Consumer>
  );
};
export default FriendsContainer;
