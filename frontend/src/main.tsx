import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App/>);

//
// const BACKEND = "http://tavern.tsuki.cz/api";
// //const BACKEND = "http://localhost:8080/api";
// fetch(BACKEND + "/hello")
//     .then(req => req.json())
//     .then(arr => {
//         const ul = document.querySelector("ul");
//
//         arr.forEach(txt => {
//             const li = document.createElement("li");
//             li.innerText = txt;
//             ul.append(li);
//         })
//     })