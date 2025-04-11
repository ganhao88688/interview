const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="picHandler">
        <div className="headshot">
          <img
            src="/image/headShot.jpg
          "
            alt="headShot"
          ></img>
        </div>
      </div>
      <div className="aboutMe">
        <h1>想做前端工程師的原因</h1>
        <ul>
          <li>大學、碩士已經有接觸</li>
          <li>能夠持續學習，接觸新技術</li>
          <li>可以接觸不同產業</li>
          <li>未來也想往後端發展，有利於溝通</li>
        </ul>
        <h1>個性</h1>
        <ul>
          <li>待人友善、就事論事</li>
          <li>能夠自我反省並改進</li>
          <li>喜歡獨處</li>
          <li>喜歡閱讀</li>
          <li>精簡表達重點</li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
