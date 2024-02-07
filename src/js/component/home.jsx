import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Digit from "./Digit.js";
import Clock from "./Clock.js";
import Card from "./Card.js";

//create your first component
const Home = (props) => {
  return (
    <div className="text-center">
      <h1>Hola {props.seconds}</h1>
	  
    </div>
  );
};

export default Home;
