import React, { useState } from "react";

import "./card.css";
export default function Card({ num, item }) {
  const [details, setDetails] = useState(false);
  return (
    <div
      onMouseOver={() => setDetails(true)}
      onMouseLeave={() => setDetails(false)}
      className="card">
      {!details ? (
        <div>Book:{num + 1}</div>
      ) : (
        <div
          // to={`${item.volumeInfo.infoLink}`}
          // href={item.volumeInfo.infoLink}
          onClick={()=>window.location.href = item.volumeInfo.infoLink}
          target="_self">
          <div className="top-card">
            <div>
              <b>Title:</b>
              {item.volumeInfo.title}
            </div>
            <div>
              <b>Author:</b> {item.volumeInfo.authors[0]}
            </div>
            <div>
              <b>Page Count:</b> {item.volumeInfo.pageCount}
            </div>
            <div>
              <b>Average Rating:</b> {item.volumeInfo.averageRating}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
