import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import state from "./redux/State.js";
import { addPost } from "./redux/State";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App state={state} addPost={addPost} />
    </React.StrictMode>
);
