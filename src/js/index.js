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
  const thre = Math.floor((segundos % 1000) / 100);
  const two = Math.floor((segundos % 100) / 10);
  const one = Math.floor(segundos % 10);

  ReactDOM.render(
    <Home digito1={one} digito2={two} digito3={thre} />,
    document.querySelector("#app")
  );
  segundos++;
}, 1000);

//                 Primer parametro          Segundo parametro
// setInterval( ["que va a realizar"] , ["cada cuanto lo realiza"])
// setInterval( () => {}       , 1000 )
// setInterval
//    (
//suma una unidad a mi variable segundos y carga mi componente home y le pasas segundos ),
//hazlo cada segundo (1000)

// let incrementador = function () {
//      segundos ++;
//      ReactDOM.render(<Home pepito={segundos}, document.querySelector("#app"));
//}
// let incrementador = () => {
//
//}
