//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/Home";

//render your react application
let segundos = 0;
setInterval(() => {
  ReactDOM.render(<Home seconds={segundos} />, document.querySelector("#app"));
  console.log("segundos:", segundos);
  segundos++;
}, 1000);
