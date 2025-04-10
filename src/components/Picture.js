const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>from: {data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        在此下載:{" "}
        <a target="_blank" href={data.src.large}>
          按一下
        </a>
      </p>
    </div>
  );
};

export default Picture;
