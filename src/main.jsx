import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

let posts = [
    {
        id: 1,
        message: "Hi 1111",
        likesCount: 12,
    },
    {
        id: 2,
        message: "Hello 22222",
        likesCount: 123,
    },
    {
        id: 3,
        message: "How are you? 33333333",
        likesCount: 34,
    },
    {
        id: 4,
        message: "Yo-yo-yo 444444444",
        likesCount: 48,
    },
    {
        id: 5,
        message: "I will back 55555555",
        likesCount: 64,
    },
    {
        id: 6,
        message: "Astalavista Baby 66666",
        likesCount: 17,
    },
    {
        id: 7,
        name: "How old are you 777777777",
        likesCount: 99,
    },
    {
        id: 8,
        message: "What is your favorite book? 8888",
        likesCount: 127,
    },
];

let dialogs = [
    {
        id: 1,
        name: "Vovanec",
    },
    {
        id: 2,
        name: "Svetlana",
    },
    {
        id: 3,
        name: "Timka",
    },
    {
        id: 4,
        name: "Beta",
    },
    {
        id: 5,
        name: "Alfa",
    },
    {
        id: 6,
        name: "Mikki",
    },
    {
        id: 7,
        name: "Madlena",
    },
    {
        id: 8,
        name: "Alica",
    },
];
let messages = [
    {
        id: 1,
        message: "Hi",
    },
    {
        id: 2,
        message: "Hello",
    },
    {
        id: 3,
        message: "How are you?",
    },
    {
        id: 4,
        message: "Yo-yo-yo",
    },
    {
        id: 5,
        message: "I will back",
    },
    {
        id: 6,
        message: "Astalavista Baby",
    },
    {
        id: 7,
        name: "How old are you",
    },
    {
        id: 8,
        message: "What is your favorite book?",
    },
];
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages} />
    </React.StrictMode>
);
