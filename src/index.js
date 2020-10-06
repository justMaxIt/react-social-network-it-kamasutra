import React from "react";
// import * as serviceWorker from "./serviceWorker";
import state from "./redux/state";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state);

// serviceWorker.unregister();
