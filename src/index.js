import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <React.StrictMode>
        <App />
        </React.StrictMode>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  )



serviceWorker.unregister();
