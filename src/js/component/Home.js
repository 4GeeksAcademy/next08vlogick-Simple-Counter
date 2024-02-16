import React from "react";

const Home = (props) => {
  return (
    <div className=" container-fluid row justify-content-center position-absolute top-50 start-50 translate-middle    border-danger-">
      <div class="gearbox">
        <div class="overlay"></div>
        <div class="gear one">
          <div class="gear-inner">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="gear two">
          <div class="gear-inner">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="gear three">
          <div class="gear-inner">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
        <div class="gear four large">
          <div class="gear-inner">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
        </div>
      </div>

      <div className="cajitas me-1 rounded col-2">
        <div className="numeros00">0</div>
      </div>

      <div className="cajitas me-1 rounded col-2">
        <div className="numeros00">0</div>
      </div>

      <div className="cajitas me-1 rounded col-2">
        <div className="numeros00">0</div>
      </div>

      <div className="cajitas me-1 rounded col-2 ccajas">
        <div className="numeros00 color">{props.digito3}</div>
      </div>

      <div className="cajitas me-1 rounded col-2 ccajas">
        <div className="numeros00 color">{props.digito2}</div>
      </div>

      <div className="cajitas me-1 rounded col-2 ccajas">
        <div className="numeros00 color ">{props.digito1}</div>
      </div>
    </div>
  );
};

export default Home;
