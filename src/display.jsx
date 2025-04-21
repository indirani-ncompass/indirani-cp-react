import "./App.css";
import React, { useState } from "react";



function Display({ dataarr,onEdit,onBookmark,bookmarks }) {
    return (
      <div>
        <ul>
          {dataarr.map((item) => ( 
            <li key={item.id}>
              <strong>Question:</strong> {item.question} <br />
              <strong>Answer:</strong> {item.answer} <br />
              <strong>Votes:</strong> {item.vote} <br/>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onBookmark(item.id)}>
              {bookmarks.includes(item.id) ? "Unbookmark" : "Bookmark"}
            </button>
              
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Display;