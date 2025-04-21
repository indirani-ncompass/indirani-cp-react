import "./App.css";
import React, { useState, useEffect } from "react";
import "./Custom.css"

function Sort({ dataarr, onSortChange, bookmarks }) {

    const [sortBy, setSortBy] = useState('');
    const [bookmarkedData, setBookmarkedData] = useState([]);

    useEffect(() => {
        const sortedData = sortData(dataarr);
        onSortChange(sortedData);
    }, [sortBy, dataarr, onSortChange]);

    const sortData = (dataarr) => {
        const sortedData = [...dataarr];
        if (sortBy === 'vote') {
            return sortedData.sort((a, b) => a.vote - b.vote);
        } else if (sortBy === "time") {
            return sortedData.sort((a, b) => (a.time > b.time ? -1 : a.time < b.time ? 1 : 0));
        }
        // onSortChange(sortedData);
        return dataarr;
    };

    const handleBookMark = () => {
        const filteredBookmarks = dataarr.filter((item) =>
          bookmarks.includes(item.id)
        );
        console.log(filteredBookmarks);
        setBookmarkedData(filteredBookmarks);
        onSortChange(filteredBookmarks);
      };

    return (
        <div className="sort-wrapper">
            <div className="radio-group">
                SORT
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="vote"
                        checked={sortBy === 'vote'}
                        onChange={(e) => setSortBy(e.target.value)}
                    />
                    Vote
                </label>
                <label>
                    <input
                        type="radio"
                        name="sort"
                        value="time"
                        checked={sortBy === 'time'}
                        onChange={(e) => setSortBy(e.target.value)}
                    />
                    Time
                </label>
                <button onClick={()=>handleBookMark()} className="bookmark-btn">BOOKMARKED</button>
            </div>
        </div>
    )
}

export default Sort;