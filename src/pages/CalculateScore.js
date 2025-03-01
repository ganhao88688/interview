import { useState, useEffect } from "react";
import ConsumeItem from "../components/ConsumeItem";

const CalculateScore = () => {
  let [formDataItems, setFormDataItems] = useState([
    { name: "預設項目1", cost: 0, score: 0 },
    { name: "預設項目2", cost: 0, score: 0 },
  ]);
  let [formCount, setFormCount] = useState(2);
  let [totalCost, setTotalCost] = useState(0);

  let addItem = () => {
    console.log("add item");
    setFormDataItems([
      ...formDataItems,
      { name: `預設項目${formCount + 1}`, cost: 0, score: 0 },
    ]);
    setFormCount(formCount + 1);
  };
  let deleteItem = (index) => {
    setTotalCost(totalCost - formDataItems[index].cost);
    setFormCount(formCount - 1);
    setFormDataItems((prevState) => {
      prevState.splice(index, 1);
      return prevState;
    });
  };
  useEffect(() => {
    console.log("form data update");
    formDataItems.map((item) => console.log(JSON.stringify(item)));
  }, [formDataItems]);
  return (
    <div className="CalculateScore">
      <h1>消費紀錄</h1>
      <form>
        {formDataItems.map((item, index) => {
          if (formCount == 0) return <div></div>;
          return (
            <ConsumeItem
              key={index}
              index={index}
              item={item}
              totalCost={totalCost}
              setTotalCost={setTotalCost}
              formDataItems={formDataItems}
              setFormDataItems={setFormDataItems}
              deleteItem={deleteItem}
            />
          );
        })}
      </form>
      <div className="result">
        <label>總金額:</label>
        <input type="number" value={totalCost} disabled></input>
      </div>
      <div className="button">
        <button
          onClick={(e) => {
            e.preventDefault();
            addItem();
          }}
        >
          新增
        </button>
        <button>提交</button>
      </div>
      <datalist id="foodScore">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </datalist>
    </div>
  );
};

export default CalculateScore;
