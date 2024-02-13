//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Clock from "../js/component/Clock";

//render your react application
let segundos = 0;
setInterval(() => {
  ReactDOM.render(<Clock seconds={segundos} />, document.querySelector("#app"));
  console.log("segundos:", segundos);
  segundos++;
}, 1000);
