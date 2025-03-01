import React, { useState } from "react";

const ConsumeItem = ({
  index,
  totalCost,
  setTotalCost,
  formDataItems,
  setFormDataItems,
  deleteItem,
}) => {
  let item = formDataItems[index];
  let [size, setSize] = useState(window.innerWidth / 100);
  let [update, setUpdate] = useState(1);
  let costChange = (e) => {
    console.log("costChange");
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
          value={item.name}
          size={size}
          onChange={(e) => {
            console.log("name change");
            setFormDataItems((prevState) => {
              prevState[index].name = e.target.value;
              return prevState;
            });
            //forceUpdate
            setUpdate((prevState) => {
              prevState = prevState == 0 ? 1 : 0;
              return prevState;
            });
          }}
        />
      </div>
      <div className="item">
        <label>金額:</label>
        <input
          type="number"
          placeholder="金額"
          min="0"
          value={item.cost}
          style={{ width: size * 10 + 5 }}
          onChange={costChange}
        />
      </div>
      <div className="item">
        <label>評分:</label>
        <input placeholder="1~5" size={size} list="foodScore" />
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log(`delete item${JSON.stringify(formDataItems[index])})`);
          deleteItem(index);
        }}
      >
        刪除
      </button>
    </div>
  );
};

export default ConsumeItem;
