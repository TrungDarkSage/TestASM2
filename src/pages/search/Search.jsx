import React from "react";
import Navbar from "../../components/Components/HomePage/Navbar";
import SearchForm from "../../components/Components/SearchPage/SearchForm";

const Search = () => {
  return (
    <div
    // className="app"
    >
      <Navbar />
      <SearchForm />
      {/* <h1 style={{ color: "blue" }}> Welcome to my website!</h1> */}
    </div>
  );
};

export default Search;
