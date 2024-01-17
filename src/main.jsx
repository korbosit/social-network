import store from "./redux/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
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
