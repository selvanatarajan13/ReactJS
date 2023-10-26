import React from "react";

const SearchItems = ({search, setsearch}) => {
  return (
    <>
        <br></br>
        <form onSubmit={(e) => e.preventDefault()}>
            <label style={{float:"left"}}>Search Bar : </label>
            <input 
                role="search"
                type="text"
                aria-label="search"
                placeholder="Search here..."
                value={search}
                onChange={(e) => setsearch(e.target.value)}
            />
        </form>
    </>
  );
};

export default SearchItems;
