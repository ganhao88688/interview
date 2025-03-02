import { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import axios from "axios";

const Homepage = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currenSearch, setCurrenSearch] = useState("");
  const auth = "gK5GzenaeEju7GLcPg3BDUAM815kEkX0UDen7xAk05uVvyAVvC7EyzTj";
  const initialUrl = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
  const searchURL = `https://api.pexels.com/v1/search?query=${input}&perpage=15&page=${page}`; //如果沒有closure問題input>currenSearch

  const search = async (url) => {
    let result = await axios.get(url, {
      headers: { Authorization: auth },
    });
    setData(result.data.photos);
    // console.log(`input:${input}, currenSearch:${currenSearch}`);
    // setPage(1); 因為有closure放棄控制page
    setCurrenSearch(input);
  };

  const morePicture = async () => {
    setPage(page + 1);
    let newURL = ``;
    console.log(currenSearch);
    if (currenSearch) {
      newURL = `https://api.pexels.com/v1/search?query=${currenSearch}&perpage=15&page=${
        page + 1
      }`;
    } else {
      newURL = `https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
    }
    let result = await axios.get(newURL, { headers: { Authorization: auth } });

    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialUrl);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          if (input) {
            search(searchURL);
          } else {
            search(initialUrl);
          }
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((picture, index) => {
            return <Picture key={index} data={picture} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Homepage;
