import { React } from "react";
import SearchPost from "./SearchPost";

const Function = ({Search,setSearch,Searchpost}) => {

    
  return (
    <>
        <SearchPost 
            Search = {Search}
            setSearch = {setSearch}
            Searchpost = {Searchpost}
      />
    </>
  );
};

export default Function;
