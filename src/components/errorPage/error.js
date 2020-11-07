import React from "react";
import "./style.css";

const Error = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>
            4<span>0</span>4
          </h1>
        </div>
        <p>К сожалению, эта страница не была найдена.</p>
        <a href="/">Home page</a>
      </div>
    </div>
  );
};

export default Error;
