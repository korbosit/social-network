// import state, { subscribe } from "./redux/state";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { addPost, updateNewPostText } from "./redux/state";
// import App from "./App.jsx";

// import "./index.css";

// let rerenderEntireTree = (state) => {
//     ReactDOM.createRoot(document.getElementById("root")).render(
//         <BrowserRouter>
//             <App
//                 state={state}
//                 addPost={addPost}
//                 updateNewPostText={updateNewPostText}
//             />
//         </BrowserRouter>
//     );
// };

// rerenderEntireTree(state);
// subscribe(rerenderEntireTree);

//========================================================================================================================================================

import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { addPost, updateNewPostText } from "./redux/state";
import App from "./App.jsx";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>
    );
};

// let rerenderEntireTree = (state) => {
//     ReactDOM.render(
//         <BrowserRouter>
//             <App
//                 state={state}
//                 addPost={addPost}
//                 updateNewPostText={updateNewPostText}
//             />
//         </BrowserRouter>,
//         document.getElementById("root")
//     );
// };

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
