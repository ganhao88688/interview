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
          <img
            src="/image/headShot.jpg
          "
            alt="headShot"
          ></img>
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
          <li>精誠資訊(學習Docker、Linux教育訓練)</li>
          <li>桓基科技(線框圖、系統操作手冊)</li>
          <li>台灣松下電器股份有限公司(電腦組裝)</li>
        </ul>
        <h1>技能</h1>
        <hr></hr>
        <div className="skill">
          <div className="frontEnd">
            <h2>Front End:</h2>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>Scss</li>
            </ul>
          </div>
          <div className="tools">
            <h2>Tools:</h2>
            <ul>
              <li>cndjs</li>
              <li>Prettier</li>
              <li>indent-rainbow</li>
              <li>Live Sass Compiler</li>
              <li>Live Sever</li>
              <li>Nodemon</li>
            </ul>
          </div>
          <div className="source">
            <h2>Source:</h2>
            <ul>
              <li>Pixels</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
