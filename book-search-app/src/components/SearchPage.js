import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./search-page.css";
export default function SearchPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(search)
  // console.log(items)
  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=%7BbookTitle", {
      method: "GET",
      "Content-Type": "application/json",
    })
      .then((res) => res.json())
      .then((data) => setItems(data.items))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="main">
      <div className="container">
        <div className="heading">BOOK SEARCH</div>
        <div className="search">
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here"
            />
          </div>
          <div>
            <img src="/search.png" alt="search-img" />
          </div>
        </div>
        <div style={{ color: "white" }}>
          Search and hover to see book details. Click to go to book details
        </div>
        <div className="books">
          {search &&
            items.map((item, index) => {
              if (item.volumeInfo.title.toLowerCase().includes(search)) {
                // console.log(item.volumeInfo.title)
                return <Card key={index} num={index} item={item} />;
              }
              return;
            })}
        </div>
      </div>
    </div>
  );
}
