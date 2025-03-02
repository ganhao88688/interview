const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input className="input" onChange={inputHandler} />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
