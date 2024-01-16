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

import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
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

rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});
