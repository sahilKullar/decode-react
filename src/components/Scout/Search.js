import React from "react";
import InputWithLabel from "./InputWithLabel";

export default function Search({ search, onSearch }) {
  const handleChange = (e) => {
    onSearch(e);
  };

  return (
    // <label htmlFor="search">
    //   Search:
    //   <input type="text" id="search" value={search} onChange={handleChange} />
    // </label>
    <InputWithLabel
      id="search"
      label="Search"
      value={search}
      onInputChange={handleChange}
    />
  );
}
