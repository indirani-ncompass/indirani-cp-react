import React, { useState, useEffect } from "react";

function QuestionList({ dataarr, setDataArr, bookmarks, setBookmarks, sortedData }) {
  const [answers, setAnswers] = useState({});
  const [editingAnswerId, setEditingAnswerId] = useState(null);
  const [focusedInputId, setFocusedInputId] = useState(null);
  const [submittedAnswerIds, setSubmittedAnswerIds] = useState(new Set());

//   useEffect(() => {
    
//     setDataArr(sortedData);
//   }, [sortedData, setDataArr]);


  const handleVoteUp = (id) => {
    setDataArr(dataarr.map((item) => (item.id === id ? { ...item, vote: item.vote + 1 } : item)));
  };

  const handleVoteDown = (id) => {
    setDataArr(dataarr.map((item) => (item.id === id ? { ...item, vote: item.vote - 1 } : item)));
  };

  const handleBookmark = (id) => {
    if (bookmarks.includes(id)) {
      setBookmarks(bookmarks.filter((bookmark) => bookmark !== id));
    } else {
      setBookmarks([...bookmarks, id]);
    }
  };

  const handleAnswerChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

//   const handleAnswerSubmit = (id) => {
//     const currentAnswer = dataarr.find((item) => item.id === id)?.answer || "";
//     const newAnswer = answers[id] || "";
//     setDataArr(
//       dataarr.map((item) =>
//         item.id === id ? { ...item, answer: newAnswer } : item
//       )
//     );
  
//     if (newAnswer !== currentAnswer) {
//       setAnswers({ ...answers, [id]: "" });
//     }
//   };
const handleAnswerSubmit = (id) => {
  const currentAnswer = dataarr.find((item) => item.id === id)?.answer || "";
  const newAnswer = answers[id] || "";

  setFocusedInputId(null); // Hide the submit button immediately

  setDataArr(
    dataarr.map((item) =>
      item.id === id ? { ...item, answer: newAnswer } : item
    )
  );

  if (currentAnswer !== "" && newAnswer !== currentAnswer) {
    setAnswers({ ...answers, [id]: "" });
  }

  setSubmittedAnswerIds((prevIds) => new Set(prevIds.add(id))); // Track submitted ID
};


  return (
    <div className="question-list">
      {dataarr.map((item) => (
        <div key={item.id} className="question-item">
          <h3>{item.question}</h3>
          <div>
            <input
              type="text"
              value={answers[item.id] !== undefined ? answers[item.id] : item.answer || ""}
              onChange={(e) => handleAnswerChange(item.id, e.target.value)}
              onFocus={() => setFocusedInputId(item.id)}
              onBlur={() => {
                if(answers[item.id] === "" || answers[item.id] === undefined){
                  setFocusedInputId(null);
                }
              }}
            />
          {(focusedInputId === item.id || !submittedAnswerIds.has(item.id)) && (
              <button onClick={() => handleAnswerSubmit(item.id)}>Submit</button>
            )}
          </div>
          <div className="vote-section">
            <button onClick={() => handleVoteUp(item.id)}>⬆️</button>
            <span>{item.vote}</span>
            <button onClick={() => handleVoteDown(item.id)}>⬇️</button>
          </div>
          <button onClick={() => handleBookmark(item.id)} className="bookmark-btn">
            {bookmarks.includes(item.id) ? "Unbookmark" : "Bookmark"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;

