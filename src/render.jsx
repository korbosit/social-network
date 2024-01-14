import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { updateNewPostText } from "./redux/State.js";
import App from "./App.jsx";
import { addPost } from "./redux/State.js";

import "./index.css";

export let rerenderEntireTree = (state) => {
    ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>
    );
};
