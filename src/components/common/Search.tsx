

const Search = () => {
  return (
    <div className="w-full h-14 box-border pl-10 pr-10">
      <label className="h-full input outline-none rounded-4xl w-full border-0 drop-shadow-sm">
        <input
          type="search"
          className="grow outline-none bg-[url(./search-normal.svg)] bg-no-repeat bg-3 bg-left"
          placeholder="چی میخوای یاد بگیری ؟"
        />
      </label>
    </div>
  );
};

export default Search;
