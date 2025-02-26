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
  return (
    <div className="formOption">
      <label>項目名稱:</label>
      <input placeholder="項目名稱" defaultValue={item.name}></input>
      <label>金額:</label>
      <input
        type="number"
        placeholder="金額"
        min="0"
        defaultValue={cost}
        onChange={costChange}
      ></input>
      <label>評分:</label>
      <input placeholder="1~5" list="foodScore"></input>
      <button
        onClick={() => {
          deleteItem(index);
          console.log("in delete button");
        }}
      >
        刪除
      </button>
    </div>
  );
};

export default ConsumeItem;
