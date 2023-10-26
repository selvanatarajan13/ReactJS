import React from "react";

const SearchPost = ({Searchpost, Search, setSearch}) => {
  return (
    <>
        <form className="App-search" onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text"
                placeholder="Search the post here.."
                htmlFor="Search-box"
                value={Search}
                onChange={(e) => setSearch(e.target.value) }
                className="custom-input"
            />
        </form>
    </>
  );
};

export default SearchPost;
