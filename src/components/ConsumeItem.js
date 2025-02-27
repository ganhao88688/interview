import { useState } from "react";

const ConsumeItem = ({
  index,
  totalCost,
  setTotalCost,
  formDataItems,
  setFormDataItems,
  deleteItem,
}) => {
  let item = formDataItems[index];
  let cost = item.cost;
  let [size, setSize] = useState(window.innerWidth / 100);
  let costChange = (e) => {
    if (e.target.value) {
      //nan
      let oldCost = item.cost;
      let newCost = parseInt(e.target.value);

      setTotalCost(totalCost - oldCost + newCost);
      setFormDataItems((prevState) => {
        prevState[index].cost = newCost;
        return prevState;
      });
    }
  };
  setInterval(() => setSize(window.innerWidth / 100), 500);
  return (
    <div className="formOption">
      <div className="item">
        <label>項目名稱:</label>
        <input
          placeholder="項目名稱"
          defaultValue={item.name}
          size={size}
        ></input>
      </div>
      <div className="item">
        <label>金額:</label>
        <input
          type="number"
          placeholder="金額"
          min="0"
          defaultValue={cost}
          style={{ width: size * 10 + 5 }}
          onChange={costChange}
        ></input>
      </div>
      <div className="item">
        <label>評分:</label>
        <input placeholder="1~5" size={size} list="foodScore"></input>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          deleteItem(index);
        }}
      >
        刪除
      </button>
    </div>
  );
};

export default ConsumeItem;
