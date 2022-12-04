import React, { useState } from "react";

export default function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e);
  };

  return (
    <>
      <label htmlFor="search">
        Search:
        <input type="text" id="search" onChange={handleChange} />
      </label>
      <p>Searching for {searchTerm}</p>
    </>
  );
}
