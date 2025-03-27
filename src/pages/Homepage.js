const Homepage = () => {
  return (
    <div className="Homepage">
      <div className="picHandler">
        <div className="headshot">
          <img src="/image/tempHeadShot.jfif" alt="headShot"></img>
        </div>
      </div>
      <div className="aboutMe">
        <h1>應徵原因</h1>
        <ul>
          <li>與大學科系相關</li>
          <li>網路上資源較多</li>
          <li>能夠持續學習</li>
          <li>可以接觸不同產業</li>
          <li></li>
        </ul>
        <h1>個性</h1>
        <ul>
          <li>待人友善、就事論事</li>
          <li>能夠自我反省(自我懷疑)</li>
          <li>喜歡獨處</li>
          <li>喜歡閱讀</li>
          <li>精簡表達重點</li>
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
