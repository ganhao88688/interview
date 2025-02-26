import { useState } from "react";

const Resume = () => {
  let [flexDirection, setFlexDirection] = useState("");
  setInterval(() => {
    setFlexDirection(window.innerWidth < 400 ? "column" : "row");
  }, 100);
  let ifClick = () => {
    console.log("h1 click");
  };
  return (
    <div className="resume" style={{ flexDirection: flexDirection }}>
      <div className="picHandler">
        <div className="headshot">
          <img src="/image/tempHeadShot.jfif" alt="headShot"></img>
        </div>
      </div>
      <div className="wordHandler">
        <h1>學歷</h1>
        <hr></hr>
        <ul>
          <li onClick={ifClick}>大學:淡江大學(2017~2021)</li>
          <li>碩士:大同大學(2021~肄業)</li>
        </ul>
        <h1>經歷</h1>
        <hr></hr>
        <ul>
          <li>松下()</li>
        </ul>
        <h1>技能</h1>
        <hr></hr>
        <ul>
          <li>react</li>
          <li>scss</li>
          <li className="ulINLi">
            <h4>tool:</h4>
            <ul>
              <li>Prettier</li>
              <li>indent-rainbow</li>
              <li>Live Sass Compiler</li>
              <li>Live Sever</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
