import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState(" ");
  const { value, onValueChange } = props;
  return (
    <input
      className="input"
      type="text"
      placeholder="หาที่เที่ยวแล้วไปกัน..."
      value={value}
      onChange={(event) => {
        onValueChange(event.target.value);
      }}
    />
  );
}

export default Search;
