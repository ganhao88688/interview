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
    setFormCount(formCount + 1);
    let tempArray = formDataItems.push({ name: "", cost: "", score: 0 });
    setFormDataItems(tempArray);
  };
  let deleteItem = async (index) => {
    // let newFormCount = ;
    setTotalCost(totalCost - formDataItems[index].cost);
    setFormCount(formCount - 1);
    setFormDataItems(formDataItems.splice(index, 1));
  };
  useEffect(
    () =>
      console.log(
        `Form Data Items:${JSON.stringify(
          formDataItems
        )} formCount(${formCount})`
      ),
    [formCount]
  );
  return (
    <div className="CalculateScore">
      <h1>消費紀錄</h1>
      <form>
        {formDataItems.map((item, index) => {
          console.log(`in map, index(${index})`);
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
            console.log(typeof formDataItems);
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
