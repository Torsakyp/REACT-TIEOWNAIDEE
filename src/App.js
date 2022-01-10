import React, { useState, useEffect } from "react";
import "./App.css";
import Content from "./Content";
import Database from "./json-server/db.json";
import Search from "./search";

const Tieownaidee = () => {
  const [search, setSearch] = useState("");
  const output = Database.trips.map((user) => user);

  const contentElements = Database.trips
    .filter((content) => {
      return content.title.includes(search);
    })
    .map((content, index) => {
      return <Content key={index} content={content} />;
    });

  return (
    <section className="section">
      <div className="container">
        <div>
          <h1 className="header"> เที่ยวไหนดี </h1>
          <Search value={search} onValueChange={setSearch} />
        </div>
        {contentElements}
      </div>
    </section>
  );
};
//🙏🏼
export default Tieownaidee;
